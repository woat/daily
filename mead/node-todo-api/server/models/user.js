const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  // This object should be defined in a schema... lol
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email.'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})

// This method is ran when the model is being returned as JSON
// Native Method Overwrite
UserSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  const { _id, email } = userObject
  return { _id, email }
}

UserSchema.methods.generateAuthToken = function () {
  const user = this
  const access = 'auth'
  // create a token containing a user.id + access
  const token = jwt.sign({ _id: user._id.toHexString(), access }, 'SALTHERE').toString()
  user.tokens.push({ access, token })
  return user.save().then(() => token)
}

UserSchema.methods.removeToken = function (token) {
  const user = this

  return user.update({
    $pull: {
      tokens: {
        token
      }
    }
  })
}

UserSchema.statics.findByToken = function (token) {
  const User = this
  let decoded

  try {
    decoded = jwt.verify(token, 'SALTHERE')
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

UserSchema.statics.findByCredentials = function (email, password) {
  const User = this

  return User
    .findOne({ email })
    .then(user => {
      if (!user) Promise.reject()
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            resolve(user)
          } else {
            reject()
          }
        })
      })
    })
}

UserSchema.pre('save', function (next) {
  const user = this

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})


const User = mongoose.model('User', UserSchema)

module.exports = { User }
