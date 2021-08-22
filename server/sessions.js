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
  list
}
/**
 * creates a new session object and returns the ID
 * @returns ID of session created
 */
function create () {
  console.log(sessions)
  const sessionId = generateSessionId()
  sessions[sessionId] = { timeout: null, state: null }
  startTimer(sessionId)
  log('Created session', sessionId)
  return sessionId
}
/**
 * starts a timeout timer for a session, given the ID
 * @param {id of what sessions timer needs to start} sessionId
 */
function startTimer (sessionId) {
  sessions[sessionId].timeout = setTimeout(expire, SESSION_TIMEOUT, sessionId) // set time out is a node function, that calls arg 1 after arg2 in milliseconds, and i think arg3 is an arg for "expire()"
}
/**
 * deletes a sessionID from the sessions object, and console logs
 * @param {id to remove from active sessoins} sessionId
 */
function expire (sessionId) {
  delete sessions[sessionId]
  log('Expired session', sessionId)
}

/**
 *
 * @param {} sessionId
 * @returns
 */
function ping (sessionId) {
  const session = sessions[sessionId]
  if (!session) return log('ERROR: Tried to ping nonexistent session', sessionId)
  if (!session.timeout) return log('ERROR: no timeout object on session', sessionId)
  log('Received ping', sessionId)
  clearTimeout(session.timeout)
  startTimer(sessionId)
}

/**
 * i think it uses "sessionId" to index a JSON object of session OBJECTS(?) that currently exist
 * @param {pass a session ID to look for} sessionId
 * @returns the session object for that ID
 */
function get (sessionId) {
  return sessions[sessionId]
}

/**
 * returns all keys for the session object
 * @returns all keys for session object
 */
function list () {
  return Object.keys(sessions)
}

/**
 * creates a unique uuid string for a new session
 * @returns returns the newly created id
 */
function generateSessionId () {
  // TODO find a better way to get short ids
  let id
  do {
    id = uuid().substring(0, 5)
  } while (get(id))
  return id
}

/**
 * not sure
 * @param {*} message
 * @param {*} sessionId
 */
function log (message, sessionId) {
  const now = new Date()
  const active = `${Object.keys(sessions).length} total active sessions`
  console.log(`${now.getHours()}:${now.getMinutes()} ${message} ${sessionId} (${active})`)
}
