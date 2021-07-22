const todoRouter = require('express').Router()

const { authVerifier } = require('../utils/function')
const { createTodo , seeTodo, seeTodos, filterTodo, updateTodo, deleteTodo} = require('../controllers/todo.controller')

//subrutas
todoRouter.get('/', authVerifier, seeTodos)
todoRouter.post('/', authVerifier, createTodo)
todoRouter.get('/:todoId', authVerifier, seeTodo)
todoRouter.get('/filter', authVerifier, filterTodo)
todoRouter.put('/:todoId', authVerifier, updateTodo)
todoRouter.delete('/:todoId', authVerifier, deleteTodo)

module.exports = todoRouter
