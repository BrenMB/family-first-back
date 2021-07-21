const usersRouter = require('express').Router()

const {authVerifier} = require('../utils/function')
const { seeYourUser, modifyUser} = require('../controllers/users.controller')

usersRouter.get('/me', authVerifier, seeYourUser)
usersRouter.put('/:userId', authVerifier, modifyUser)



module.exports = usersRouter  