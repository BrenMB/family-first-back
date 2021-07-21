const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Your user name cannot be blank.'],

  },
  lastName: {
    type: String,
    required: [true, 'Your user lastname cannot be blank.'],

  },
  birthday: {
    type: Date,
    required: [true, 'Your phone number cannot be blank.'],

  },
  gender: {
    type: String,
    required: [true, 'Your email cannot be blank'],
    enum: ["Male", "Female"]

  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ]
})

const childModel = mongoose.model('child', childSchema);
module.exports = childModel
