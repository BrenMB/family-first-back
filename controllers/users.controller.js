const usersModel = require('../models/users.model')

function seeYourUser(req, res) {
  const userId = res.locals.id
  usersModel.findById(userId)
    .then(
      function deletepwd(user) {
        user.pwd = ""
        return res.json(user)
      })
//ASK FOR DELETE PWD 

    .catch((err) => res.json(err))
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