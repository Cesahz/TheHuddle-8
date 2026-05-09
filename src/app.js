const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path') //permite usar metodos put/delete en formularios html
require('dotenv').config() //cargar variables de entorno

const app = express()

//middlewares (interceptor entre cada request y response)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

//capa de vistas, para respetar la arquitectura MVC
app.set('view engine', 'ejs')   //define ejs como el motor de renderizado
app.set('views', path.join(__dirname, 'views'))

//conexion con la base de datos
mongoose.connect(process.env.MONGO_URI)
  //exitoso
  .then(() => console.log('MongoDB conectado'))
  //error
  .catch(err => console.log(err))


//---- enrutamiento
//ruta de los temas
const topicRoutes = require('./routes/topicRoutes')
app.use('/', topicRoutes)

//ruta de los links
const linkRoutes = require('./routes/linkRoutes')
app.use('/topics/:id/links', linkRoutes) //subrutas dinamicas dependiendo del id :3

//servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}  :D`))