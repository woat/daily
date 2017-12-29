const { User } = require('../models/user');

exports.register = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })

  user.save()
  const token = await user.generateAuthToken()
  res.send({ token, user })
}

exports.login = async (req, res) => {
  const user = await User.findByCredentials(req.body.email, req.body.password)
  if (user.error) throw user
  // If a logged in user somehow gets to a login page...
  // [0] may break when introducing new tokens
  if (user.tokens.length) return res.send({ token: user.tokens[0].token, user })
  const token = await user.generateAuthToken()
  res.send({ token, user })
}

exports.me = (req, res) => {
  res.send({
    msg: 'This is a secret link, the user data for this token is below',
    user: req.user,
    token: req.token
  })
}

exports.logout = async (req, res) => {
  // TODO Do I need a check if there is a token?
  req.user.removeToken(req.body.token).then(() => {
    res.status(200).send('Token deleted')
  }, () => {
    res.status(400).send()
  })
}

