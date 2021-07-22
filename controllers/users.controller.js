

const usersModel = require('../models/users.model')

async function seeYourUser(req, res) {
  try {
    const user = await usersModel.findById(res.locals.user._id, '-pwd').populate('child')
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
 async function getChildrenOfUser(req,res){
  try {
    const user = await usersModel.findById(res.locals.user._id)
    .populate('child')

    res.json(user.child)
  }
  catch(error) {
    res.json(error)
  }
}

module.exports = {
  seeYourUser,
  modifyUser,
  getChildrenOfUser,
}
