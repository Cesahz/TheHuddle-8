//importar mongoose para trabajar con MongoDB
const mongoose = require('mongoose');

//definir el esquema de enlace
const linkSchema = new mongoose.Schema({
  url: { type: String, required: true }, //url obligatoria
  descripcion: { type: String }, //descripcion opcional
  votos: { type: Number, default: 0 } //votos 0 por defecto
}, { timestamps: true });

//definir el esquema principal para los temas
const topicSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, //titulo obligatorio
  descripcion: { type: String }, //descripcion opcional
  votos: { type: Number, default: 0 },
  enlaces: [linkSchema] //array de enlaces dentro del tema
}, { timestamps: true });

//exportar el modelo de tema para usarlo en otras partes de la app
module.exports = mongoose.model('Topic', topicSchema);