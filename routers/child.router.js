const childRouter = require('express').Router()

const { auth } = require('../utils/function')
const { createChild } = require('../controllers/child.controller')

//subrutas
childRouter.post('/', auth, createChild)


module.exports = childRouter  