const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
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
  creationDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
  state: {
    type: String,
    enum: ["Created", "Assignee", "In progress", "Done"]
  },


})

const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel
