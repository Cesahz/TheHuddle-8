const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path')
require('dotenv').config()

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


const topicRoutes = require('./routes/topicRoutes')
app.use('/', topicRoutes)

const linkRoutes = require('./routes/linkRoutes')
app.use('/topics/:id/links', linkRoutes)

// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))