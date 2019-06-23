const uuid = require('uuid/v4')

const SESSION_TIMEOUT = 1000 * 60 * 5 // 5min (in milliseconds)

const sessions = {} // map of session ids to Timeout objects

module.exports = {
  create,
  ping,
  exists,
}

function create () {
  const sessionId = uuid()

  startTimer(sessionId)
  log('Created session', sessionId)

  return sessionId
}

function startTimer (sessionId) {
  sessions[sessionId] = setTimeout(expire, SESSION_TIMEOUT, sessionId)
}

function expire (sessionId) {
  delete sessions[sessionId]
  log('Expired session', sessionId)
}

function ping (sessionId) {
  const timer = sessions[sessionId]
  if (!timer) return log('ERROR: Tried to ping nonexistent session', sessionId)

  log('Received ping', sessionId)
  clearTimeout(timer)
  startTimer(sessionId)
}

function exists (sessionId) {
  return Boolean(sessions[sessionId])
}

function log (message, sessionId) {
  const now = new Date()
  const active = `${Object.keys(sessions).length} total active sessions`
  console.log(`${now.getHours()}:${now.getMinutes()} ${message} ${sessionId} (${active})`)
}
