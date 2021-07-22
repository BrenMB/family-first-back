const usersRouter = require('express').Router()

const {authVerifier} = require('../utils/function')
const { seeYourUser, modifyUser, getChildrenOfUser} = require('../controllers/users.controller')

usersRouter.get('/me', authVerifier, seeYourUser)
usersRouter.put('/:userId', authVerifier, modifyUser)
usersRouter.get('/:userId/children', authVerifier, getChildrenOfUser)

module.exports = usersRouter
