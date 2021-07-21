const childRouter = require('express').Router()

const { authVerifier } = require('../utils/function')
const { createChild } = require('../controllers/child.controller')

//subrutas
childRouter.post('/', authVerifier, createChild)


module.exports = childRouter  