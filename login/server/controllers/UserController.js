const { User } = require('../models/user');

exports.register = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })

  user.save()
  const token = await user.generateAuthToken()
  res.header('x-auth', token).send(user)
}

exports.login = async (req, res) => {
  const user = await User.findByCredentials(req.body.email, req.body.password)
  const token = await user.generateAuthToken()
  // res.header('x-auth', token).send(user)
  // Should token be sent like this?
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
  req.user.removeToken(req.body.token).then(() => {
    res.status(200).send('Token deleted')
  }, () => {
    res.status(400).send()
  })
}

