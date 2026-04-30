const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  descripcion: { type: String },
  votos: { type: Number, default: 0 }
}, { timestamps: true })

const topicSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  votos: { type: Number, default: 0 },
  enlaces: [linkSchema]
}, { timestamps: true })

module.exports = mongoose.model('Topic', topicSchema)