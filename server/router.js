const express = require('express')
const path = require('path')
const sessions = require('./sessions.js')

const buildDir = path.join(__dirname, '..', 'docs')

const router = express.Router()
module.exports = router

router.get('/', (req, res, next) => {
  let sessionId = req.query.session

  if (!sessionId) {
    sessionId = sessions.create()
    return res.redirect('/?session=' + sessionId)
  }

  if (!sessions.get(sessionId)) {
    return res.status(400).render('nosession', { sessionId })
  }

  next('route')
})

// this is where angular is configured to put the built files
router.use(express.static(buildDir))
console.log('Serving files from ' + buildDir)

// websockets example frontend
// app.use('/example', express.static(__dirname + '/example'))

router.post('/ping', (req, res, next) => {
  const sessionId = req.query.session
  if (!sessionId) return res.status(400).send('Ping must include a ?session=')
  if (!sessions.get(sessionId)) return res.status(400).send('No session ' + sessionId)

  sessions.ping(sessionId)
  res.send('pong')
})

router.get('/sessions', (req, res, next) => {
  res.json(sessions.list())
})
