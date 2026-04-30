const Topic = require('../models/Topic')

// Crear enlace
exports.createLink = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  topic.enlaces.push(req.body)
  await topic.save()
  res.redirect(`/topics/${req.params.id}`)
}

// Borrar enlace
exports.deleteLink = async (req, res) => {
  const topic = await Topic.findById(req.params.id)
  topic.enlaces.id(req.params.linkId).deleteOne()
  await topic.save()
  res.redirect(`/topics/${req.params.id}`)
}

// Votar enlace
exports.voteLink = async (req, res) => {
  await Topic.findOneAndUpdate(
    { _id: req.params.id, 'enlaces._id': req.params.linkId },
    { $inc: { 'enlaces.$.votos': 1 } }
  )
  res.json({ success: true })
}