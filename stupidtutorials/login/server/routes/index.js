var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')

const jwtOptions = {}
jwtOptions.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
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

function catchErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  }
}

router.get('/', (req, res) => {
  // On a get request, send data back using JSON with res.send
  res.send({
    msg: 'New data from express',
  })
})

router.post('/post', (req, res) => {
  // On a post request, use req.body to access the data from Vue
  console.log(req.body)
  req.body.msg = !req.body.msg ? req.body.msg = 'You need to send something' : req.body
  res.send(req.body);
})

// Login Routes

router.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // usually this would be a database call:
  const user = users.filter(user => {
    return user.name === name
  })
  console.log(user)
  console.log(req.body.name)
  if( !user ){
    res.status(401).json({message:"no such user found"});
  }

  if(user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
});

router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json({message: "Success! You can not see this without a token"});
});

router.get("/secretDebug",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});

module.exports = router;
