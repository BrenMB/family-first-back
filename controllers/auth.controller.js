const usersModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



function signUp(req, res) {
  const hashed_pwd = bcrypt.hashSync(req.body.pwd, 10)

  const hashed_body = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    pwd: hashed_pwd,
  }

  usersModel.create(hashed_body)
    .then((user) => {

      const insideToken = {
        firstname: user.firstname,
        lastname: user.lastname,
        phoneNumber: user.phoneNumber,
        id: user._id,
        email: user.email

      }

      const token = jwt.sign(
        insideToken,
        process.env.SECRET
      )

      const resUser = {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        phoneNumber: user.phoneNumber,
        email: user.email,
        token: token
      }
      res.json(resUser)

    })
    .catch((err) => {
      res.json(err)
    })
}

function login(req, res) {

  usersModel.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) res.json('Can not find the email')

      bcrypt.compare(
        req.body.pwd,
        user.pwd,
        (err) => {
          if (err) res.json('Invalid Password')

          const insideToken = {
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
            id: user._id,
            email: user.email,
          }

          const token = jwt.sign(
            insideToken,
            process.env.SECRET,
          )

          resUser = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
            email: user.email,
            token: token
          }

          res.json(resUser)
        })

    })
    .catch((err) => console.error(err))
}

module.exports = {
  signUp,
  login
}