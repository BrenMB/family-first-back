const todoRouter = require('express').Router()

const { authVerifier } = require('../utils/function')
const { createTodo , seeTodo, filterTodo } = require('../controllers/todo.controller')

//subrutas
todoRouter.post('/', authVerifier, createTodo)
todoRouter.get('/filter', authVerifier, filterTodo)
todoRouter.get('/:todoId', authVerifier, seeTodo)


module.exports = todoRouter  