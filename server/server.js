const express = require('express')
const WebSocket = require('ws')
const http = require('http')

const conf = require('./conf.js')
const app = express()

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

// this is where angular is configured to put the built files
let buildDir = __dirname + '/../docs'
app.use(express.static(buildDir))
console.log('Serving files from ' + buildDir)

// websockets example frontend
// app.use('/example', express.static(__dirname + '/example'))

server.listen(conf.port)
console.log('Listening on ' + conf.port)
console.log('(ufw has been set up to redirect port 80 -> 8080)')
