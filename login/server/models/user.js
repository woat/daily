const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const promisify = require('es6-promisify')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: [{
      validator: value => validator.isEmail(value),
      msg: 'Invalid Email'
    }]
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
  // const user = this

  const { _id, email } = this.toObject()
  return { _id, email }
}

UserSchema.methods.generateAuthToken = function () {
  // const user = this

  const access = 'auth'
  // create a token containing a user.id + access
  const token = jwt.sign({ _id: this._id.toHexString(), access }, 'SALTHERE').toString()
  this.tokens.push({ access, token })
  return this.save().then(() => token)
}

UserSchema.methods.removeToken = function (token) {
  // const user = this

  return this.update({
    $pull: {
      tokens: {
        token
      }
    }
  })
}

UserSchema.statics.findByToken = async function (token) {
  // const User = this

  let decoded = await jwt.verify(token, 'SALTHERE')

  return this.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

UserSchema.statics.findByCredentials = async function (email, password) {
  // const User = this

  const user = await this.findOne({ email })
  const compare = promisify(bcrypt.compare)
  const hashesMatch = await compare(password, user.password)

  // pass error to controller THEN throw it
  if (!user || !hashesMatch) return {
    error: 'The email address or password you entered is not valid'
  }

  return user
}

UserSchema.pre('save', async function (next) {
  // const user = this

  const genSalt = promisify(bcrypt.genSalt)
  const getHash = promisify(bcrypt.hash)

  if (!this.isModified('password')) return next()

  const salt = await genSalt(10)
  const hash = await getHash(this.password, salt)
  this.password = hash
  next()
})


const User = mongoose.model('User', UserSchema)

module.exports = { User }
