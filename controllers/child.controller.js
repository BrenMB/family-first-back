const childModel = require('../models/child.model')
const usersModel = require('../models/users.model')

async function createChild(req, res) {
  try {
    const child = await childModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      gender: req.body.gender,
      users: [res.locals.user._id, req.body.guestId]
    })

    res.locals.user.child = child._id
    await res.locals.user.save()

    const guest = await usersModel.findById(req.body.guestId)
    guest.child = child._id
    await guest.save()

    res.json(child)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function filterChild(req, res) {
  try {
    const childrenFiltered = await childModel.find({ users: res.locals.user._id })
    return res.json(childrenFiltered)

  } catch (error) {
    res.json(error)
  }
}


module.exports = {
  createChild,
  filterChild,
}
