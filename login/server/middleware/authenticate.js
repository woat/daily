const { User } = require('../models/user')

const authenticate = async (req, res, next) => {
  const token = req.header('x-auth')
  const user = await User.findByToken(token)

  req.user = user
  req.token = token
  next()
}

module.exports = { authenticate }
