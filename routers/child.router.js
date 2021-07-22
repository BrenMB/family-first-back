const childRouter = require('express').Router()

const { authVerifier } = require('../utils/function')
const { createChild, filterChild} = require('../controllers/child.controller')


childRouter.post('/', authVerifier, createChild)
childRouter.get('/filter', authVerifier, filterChild)


module.exports = childRouter  