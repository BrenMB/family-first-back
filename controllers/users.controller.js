const usersModel = require('../models/users.model')


function seeYourUser(req, res) {
  const userId = res.locals.id
  usersModel.findById(userId)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
}

function getAllUsers(req, res) {
  usersModel.find(req.query)
    .populate('students')
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.json(err)
    })
}

function modifyUser(req, res) {
  usersModel.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then((user) => {
      console.log(user);
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

function deleteUser(req, res) {
  usersModel.findByIdAndDelete(req.params.userId)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}


module.exports = {
  seeYourUser,
  getAllUsers,
  modifyUser,
  deleteUser,
}