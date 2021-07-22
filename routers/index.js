const router = require('express').Router()


const authRouter  = require('./auth.router')
const usersRouter = require('./users.router')
const childRouter = require('./child.router')
const todoRouter = require('./todo.router')


router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/child', childRouter)
router.use('/todo', todoRouter)

router.get( '/', (req, res) => {
  res.json({ msg: 'API Alive!' })
})
module.exports = router
