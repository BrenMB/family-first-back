
const usersModel = require('../models/users.model')

async function seeYourUser(req, res) {
  try {
    const user = await usersModel.findById(res.locals.user._id, '-pwd')
    return res.json(user)
  } catch (error) {
    res.json(err)
  }
}

function modifyUser(req, res) {
  usersModel.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  seeYourUser,
  modifyUser,

}