const express = require('express')
const WebSocket = require('ws')
const http = require('http')
const path = require('path')
const router = require('./router.js')
const https = require('https')
const fs = require('fs')

const conf = require('./conf.js')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)

const httpServer = http.createServer(app)
const httpsServer = https.createServer({
  key: fs.readFileSync(conf.sslDir + '/privkey.pem'),
  cert: fs.readFileSync(conf.sslDir + '/cert.pem'),
}, app)
const wss = new WebSocket.Server({ server: httpServer })

wss.on('connection', (ws) => {
  ws.on('message', (message) => onMessage(ws, message))
})

function onMessage (sender, message) {
  wss.clients.forEach((ws) => {
    if (ws === sender) return
    ws.send(message)
  })
}

httpServer.listen(conf.httpPort)
httpsServer.listen(conf.httpsPort)
console.log('http on ' + conf.httpPort)
console.log('https on ' + conf.httpsPort)
console.log('(ufw has been set up to redirect 80 and 443)')
