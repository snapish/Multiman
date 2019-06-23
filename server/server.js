const express = require('express')
const WebSocket = require('ws')
const http = require('http')
const path = require('path')
const router = require('./router.js')

const conf = require('./conf.js')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  ws.on('message', (message) => onMessage(ws, message))
})

function onMessage (sender, message) {
  wss.clients.forEach((ws) => {
    if (ws === sender) return
    ws.send(message)
  })
}

server.listen(conf.port)
console.log('Listening on ' + conf.port)
console.log('(ufw has been set up to redirect port 80 -> 8080)')
