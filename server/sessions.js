const uuid = require('uuid/v4')

const SESSION_TIMEOUT = 1000 * 60 * 5 // 5min (in milliseconds)

const sessions = {} // map of session ids to a session object with the following properties:
// {
//   timeout (Timeout object)
//   state (the current state for that session
// }

module.exports = {
  create,
  ping,
  get,
}

function create () {
  const sessionId = generateSessionId()
  sessions[sessionId] = { timeout: null, state: null }
  startTimer(sessionId)
  log('Created session', sessionId)

  return sessionId
}

function startTimer (sessionId) {
  sessions[sessionId].timeout = setTimeout(expire, SESSION_TIMEOUT, sessionId)
}

function expire (sessionId) {
  delete sessions[sessionId]
  log('Expired session', sessionId)
}

function ping (sessionId) {
  const session = sessions[sessionId]
  if (!session) return log('ERROR: Tried to ping nonexistent session', sessionId)
  if (!session.timeout) return log('ERROR: no timeout object on session', sessionId)

  log('Received ping', sessionId)
  clearTimeout(session.timeout)
  startTimer(sessionId)
}

function get (sessionId) {
  return sessions[sessionId]
}

function generateSessionId () {
  // TODO find a better way to get short ids
  var id
  do {
    id = uuid().substring(0,5)
  } while (get(id))
  return id
}

function log (message, sessionId) {
  const now = new Date()
  const active = `${Object.keys(sessions).length} total active sessions`
  console.log(`${now.getHours()}:${now.getMinutes()} ${message} ${sessionId} (${active})`)
}
