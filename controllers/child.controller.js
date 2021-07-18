const childModel = require('../models/child.model')
//defino las tareas que se podrian realizar

function createChild(req, res) { 
  // const userId = mongoose.Types.ObjectId(res.locals.id)
  const userId =  res.locals.id;

  const newChildData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    gender: req.body.gender,
    inviteeEmail: req.body.inviteeEmail,
    users: [userId,]
  }
  childModel.create(newChildData)
    .then((child) => {
    console.log(child);
    res.json(child)
  })
  .catch((err) => {
    res.json(err)
  })
}

// function seeYourUser(req, res) {
//   const userId = res.locals.id
//   usersModel.findById(userId)
//     .then(
//       function deletepwd(user) {
//         user.pwd = ""
//         return res.json(user)
//       })
// //ASK FOR DELETE PWD 
//     .catch((err) => res.json(err))
// }

// function modifyUser(req, res) {
//   usersModel.findByIdAndUpdate(req.params.userId, req.body, { new: true })
//     .then((user) => {
//       res.json(user)
//     })
//     .catch((err) => {
//       res.json(err)
//     })
// }

module.exports = {
  createChild,
}