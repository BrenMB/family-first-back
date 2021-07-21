const authRouter = require('express').Router()


const { login, signUp, addGuest } = require('../controllers/auth.controller')

authRouter.post('/login', login)
authRouter.post('/signup', signUp)
authRouter.post('/addGuest', addGuest)

module.exports = authRouter