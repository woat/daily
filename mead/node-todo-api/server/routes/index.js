const express = require('express')
const UserController = require('../controllers/UserController')
const { authenticate } = require('../middleware/authenticate')

const router = express.Router()

function errors(fn) {
  return (req, res, next) => fn(req, res).catch(next)
}

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.get('/me', authenticate, UserController.me)

router.delete('/logout', authenticate, UserController.logout)

module.exports = router
