/**
 * user module - REST CALLS
 * @module user
 */

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('../models/user')
const secretKey = 'something'


module.exports = (app)=>{
// GET ALL USERS
app.get('/', (req, res) => {
    User.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).send({err: 'Could not get all users'}))
  });
  
  
  // CREATE USER
  app.post('/create', (req, res) => {
  console.log('req  CREATE USER', req)
    let user = new User();
    const userObj = req.body;
    let { firstName, lastName, email, password, role } = userObj
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.role = role
  
    User.findOne({ email }).then(userData => {
      if (userData) {
        return res.status(400).json({err: 'Email exsists'});
      }else {
        console.log('password 2', password)
        // Ref: taken from bcrypt example https://goo.gl/4EMHbe
        bcrypt.hash(password, 2, function(err, hash) {
          // Store hash in your password DB.
          user.password = hash
          user.save()
          .then(data => res.send(data))
          .catch(err => res.status(400).send({err: 'Could not create user'}))
        });
      }
    });
  });
  
  
  // GET SINGLE USER
  app.get('/:userId', (req, res) => {
    let userId = req.params.userId
  
    User.findById(userId)
    .then(userData => res.send(userData))
    .catch(() => res.status(400).json({err: 'User does not exist'}))
  
  });
  
  
  // SINGLE LOGIN
  app.post('/login', (req, res) => {
  
    let { email, password } = req.body
  
    // find user and if everything is found decrypt password
    User.findOne({email: email}).then(userData => {
      if (userData == null) {
        res.status(400).json({err: 'Email does not exist'});
      }else {
        let dbPassword = userData.password
        let {_id, firstName, lastName, email, role} = userData
  
        bcrypt.compare(password, dbPassword).then(result => {
              if (result === false) {
                return res.status(400).json({err: 'This is the wrong password'});
              }
  
  
              let jwtData = {};
              jwtData._id = _id
              jwtData.firstName = firstName
              jwtData.lastName = lastName
              jwtData.email = email
              jwtData.role = role
  
              let token = jwt.sign(jwtData, secretKey)
              res.json({token})
  
        })
      }
    })
  
  });
}