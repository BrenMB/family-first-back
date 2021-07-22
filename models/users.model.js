const mongoose = require('mongoose')
//defino el formato de child

const usersSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: [true, 'Your user name cannot be blank.'],

  },
  lastName: {
    type: String,
    required: [true, 'Your user lastname cannot be blank.'],

  },
  phoneNumber: {
    type: Number,
    required: [true, 'Your phone number cannot be blank.'],

  },
  email: {
    type: String,
    required: [true, 'Your email cannot be blank'],
    lowercase: true,
    unique: true
  },
  pwd: {
    type: String,
    required: [true, 'Your email cannot be blank']
  },
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'child'
  }
})

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel

