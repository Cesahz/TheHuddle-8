const Topic = require('../models/Topic')

//crear enlace
exports.createLink = async (req, res) => {
  //consultar en la db por id recibido del parametro
  const topic = await Topic.findById(req.params.id)
  //agregar al db
  topic.enlaces.push(req.body)
  //confirmar cambio
  await topic.save()
  res.redirect(`/topics/${req.params.id}`)
}

//borrar enlace
exports.deleteLink = async (req, res) => {
  //consultar al db por id recibido del parametro
  const topic = await Topic.findById(req.params.id)
  //encontrar id del subdocumento para borrar con el metodo .id
  topic.enlaces.id(req.params.linkId).deleteOne()
  //confirmar cambio
  await topic.save()
  res.redirect(`/topics/${req.params.id}`)
}

//votar enlace
exports.voteLink = async (req, res) => {
  await Topic.findOneAndUpdate(
    { _id: req.params.id, 'enlaces._id': req.params.linkId }, //filtro
    { $inc: { 'enlaces.$.votos': 1 } }  //actualizacion
  )
  res.json({ success: true })
}