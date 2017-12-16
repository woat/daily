const passportJWT = require('passport-jwt')
const ExtractJWT = passportJWT.ExtractJWT
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil'

// dummy users
const users = [
  {
    id: 1,
    name: 'jonathanmh',
    password: '%2yx4'

  },
  {
    id: 2,
    name: 'test',
    password: 'test'
  }
];

const strategy = JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload recieved', jwt_payload) {
    console.log('payload recieved', jwt_payload);
    // this would be a db call
    const user = users[users.findIndex({id: jwt_payload.id})];
  }
})

module.exports = strategy
