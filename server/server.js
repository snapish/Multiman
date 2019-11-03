const express = require('express')
const WebSocket = require('ws')
const http = require('http')
const path = require('path')
const router = require('./router.js')
const https = require('https')
const fs = require('fs')
const url = require('url')

const conf = require('./conf.js')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)

const httpServer = http.createServer(app) //http.create...
const wsServerUnsecure = new WebSocket.Server({ server: httpServer })
let wsServerSecure
wsServerUnsecure.on('connection', onConnect)
httpServer.listen(conf.httpPort) //httpServer, httpPort
console.log('http on ' + conf.httpPort)

try {
  const httpsServer = https.createServer({
    key: fs.readFileSync(conf.sslDir + '/privkey.pem'),
    cert: fs.readFileSync(conf.sslDir + '/cert.pem'),
  }, app)
  wsServerSecure = new WebSocket.Server({ server: httpsServer })
  wsServerSecure.on('connection', onConnect)
  httpsServer.listen(conf.httpsPort)
  console.log('https on ' + conf.httpsPort)
} catch (err) {
  console.warn('Unable to serve HTTPS', err.message)
}

function onMessage (sender, message) {
  //console.log('receieved message', message)
  const cb = (ws) => {
    if (ws === sender) return
    if (sender.multiman_session !== ws.multiman_session) return
    ws.send(message)
  }
  wsServerUnsecure.clients.forEach(cb)
  if (wsServerSecure) wsServerSecure.clients.forEach(cb)
}

function onConnect(ws, req) {
  const session = url.parse(req.url, true, true).query.session
  if (!session) {
    return console.warn('No session on ws connection', req.url)
  }
  ws.multiman_session = session
  ws.on('message', (message) => onMessage(ws, message))
}
console.log('(ufw has been set up to redirect 80 and 443)')
