const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override') //permite usar metodos put/delete en formularios html
const path = require('path') 
require('dotenv').config() //cargar variables de entorno

//crear la app
const app = express()

//middlewares 
app.use(express.urlencoded({ extended: true })) //leer datos de formularios HTML
app.use(express.json())                         //leer datos JSON
app.use(methodOverride('_method'))              //convierte POST+?_method=PUT en PUT
app.use(express.static(path.join(__dirname, 'public'))) //sirve main al navegador

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