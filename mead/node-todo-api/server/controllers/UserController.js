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
  res.header('x-auth', token).send(user)
}

exports.me = (req, res) => {
  res.send({
    msg: 'This is a secret link, the user data for this token is below',
    ...req.user._doc
  })
}

exports.logout = (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send()
  }, () => {
    res.status(400).send()
  })
}

