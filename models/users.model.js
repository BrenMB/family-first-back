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
  }
})

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel


//Con esta expresión regular puedes validar cualquier dirección de correo elecrónico que contenga caracteres Unicode:


//enum: {
/* values: ['lateshift', 'earlyshift'],
 message: '{VALUE} is not supported'
*/
/*
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()

*/