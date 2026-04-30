const Topic = require('../models/Topic')

// Mostrar todos los temas
exports.getAllTopics = async (req, res) => {
  const topics = await Topic.find().sort({ votos: -1 })
  res.render('index', { topics })
}

// Mostrar formulario nuevo tema
exports.newTopicForm = (req, res) => {
  res.render('new')
}

// Crear tema
exports.createTopic = async (req, res) => {
  await Topic.create(req.body)
  res.redirect('/')
}

// Mostrar detalle de un tema
exports.getTopic = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  res.render('topic', { topic })
}

// Mostrar formulario editar tema
exports.editTopicForm = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  res.render('edit', { topic })
}

// Actualizar tema
exports.updateTopic = async (req, res) => {
  await Topic.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/')
}

// Borrar tema
exports.deleteTopic = async (req, res) => {
  await Topic.findByIdAndDelete(req.params.id)
  res.redirect('/')
}

// Votar tema
exports.voteTopic = async (req, res) => {
  await Topic.findByIdAndUpdate(req.params.id, { $inc: { votos: 1 } })
  res.json({ success: true })
}