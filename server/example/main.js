/* eslint-env browser */

var ws = new WebSocket('ws://' + window.location.host)

var outputDiv = document.getElementById('output')
var input = document.getElementById('input')
var sendButton = document.getElementById('sendit')

sendButton.onclick = function () {
  var text = input.value
  if (text) {
    input.value = ''
    ws.send(text)
  }
}

ws.onmessage = function (event) {
  outputDiv.innerText += event.data + '\n'
}
