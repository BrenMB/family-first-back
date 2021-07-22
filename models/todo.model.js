const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  childId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"child"
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false
  },
})

const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel
