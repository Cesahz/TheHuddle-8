const Topic = require('../models/Topic')

//mostrar todos los temas ordenados por votos
exports.getAllTopics = async (req, res) => {
  const topics = await Topic.find().sort({ votos: -1 })
  res.render('index', { topics })
}

//mostrar formulario nuevo tema
exports.newTopicForm = (req, res) => {
  res.render('new')
}

//crear tema
exports.createTopic = async (req, res) => {
  await Topic.create(req.body)
  res.redirect('/')
}

//mostrar detalle de un tema
exports.getTopic = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  res.render('topic', { topic })
}

//mostrar formulario editar tema
exports.editTopicForm = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  res.render('edit', { topic })
}

//actualizar tema
exports.updateTopic = async (req, res) => {
  await Topic.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/')
}

//borrar tema
exports.deleteTopic = async (req, res) => {
  await Topic.findByIdAndDelete(req.params.id)
  res.redirect('/')
}

//votar tema
exports.voteTopic = async (req, res) => {
  await Topic.findByIdAndUpdate(req.params.id, { $inc: { votos: 1 } })
  res.json({ success: true })
}