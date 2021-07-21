const jwt = require('jsonwebtoken')
const userModel = require('../models/users.model')

async function authVerifier(req, res, next) {
  try {
    const token = await jwt.verify(req.headers.token, process.env.SECRET)
    res.locals.user = await userModel.findById(token.id)
    next()
  } catch (error) {
    console.log(error)
    return res.status(403).json({ msg: 'Not Authorized' })
  }
}


module.exports = {
  authVerifier
}