const usersRouter = require('express').Router()

const {auth} = require('../utils/function')
const { seeYourUser, modifyUser} = require('../controllers/users.controller')


usersRouter.get('/me', auth, seeYourUser)
usersRouter.put('/:userId', auth, modifyUser)



module.exports = usersRouter  