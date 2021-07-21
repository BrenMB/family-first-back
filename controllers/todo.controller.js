const todoModel = require('../models/todo.model')

async function createTodo( req, res ) {
  try {
    const todo = await todoModel.create({
      childId: req.body.childId,
      createdBy: res.locals.user._id,
      title: req.body.title,
      description: req.body.description,
      creationDate: req.body.creationDate,
      endDate: req.body.endDate,
      assignee: req.body.assignee,//name and id??
      state: req.body.state
    })
    return res.json(todo)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


async function seeTodo(req, res) {
  try {
    const todo = await todoModel.findById(req.params.todoId)
    return res.json(todo)
  } catch (error) {
    res.json(err)
  }

}

async function filterTodo(req, res) {
  try {
    const filtered = await todoModel.find({ $or: [ 
      { childId : req.query.childId },
      { assignee : req.query.assignee}
    ]}) 
    return res.json(filtered)
    } catch (error) {
    res.json(error)
  }

}
// TODO: UPDATE




module.exports = {
  createTodo,
  seeTodo,
  filterTodo,

}