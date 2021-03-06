const usersModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signUp(req, res) {
  try {
    const pwd = await bcrypt.hash(req.body.pwd, 10)
    const newUserData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      pwd: pwd,
    }
    const user = await usersModel.create(newUserData);

    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        id: user._id,

      },
      process.env.SECRET
    );

    return res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      id: user._id,
      token: token,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json(error);
  }
}

async function login(req, res) {
  try {
    const user = await usersModel.findOne({ email: req.body.email })

    if (!user) return res.json({ error: `wrong email ${req.body.email}` });

    bcrypt.compare(req.body.pwd, user.pwd, (err, result) => {
      if (!result) {
        return res.json({ error: `wrong password for ${req.body.email}` })
      }
      const token = jwt.sign({
        name: user.name,
        email: user.email,
        id: user._id,

      }, process.env.SECRET);

      res.json({
        name: user.name,
        email: user.email,
        id: user._id,
        token: token,
      })
    })
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addGuest(req, res) {
  try {
    const pwd = await bcrypt.hash(req.body.pwd, 10)

    //res.local.user
    const user = await usersModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      pwd: pwd,
    });

    return res.json({ id: user._id });
  } catch (error) {
    console.error(error)
    res.status(500).json(error);
  }
}
module.exports = {
  signUp,
  login,
  addGuest,
};