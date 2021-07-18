const router = require('express').Router()


const authRouter = require('./auth.router')//require the router's file
const usersRouter = require('./users.router')
const childRouter = require('./child.router')

router.use('/auth', authRouter)//asigno las rutas primarias y en el segundo parametro invoco las subrutas
router.use('/users', usersRouter)
router.use('/child', childRouter)
router.get('/', (req, res) => {
  res.json({ msg: 'API Alive!' })
})
module.exports = router