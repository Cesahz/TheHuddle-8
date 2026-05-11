const express = require('express')
const router = express.Router()
const topicController = require('../controllers/topicController')

//nota, las rutas fijas siempre antes que las dinamicas, el orden importa
router.get('/', topicController.getAllTopics) //lista de temas
router.get('/topics/new', topicController.newTopicForm) //formulario crear
router.post('/topics', topicController.createTopic) //crear tema
router.get('/topics/:id', topicController.getTopic) //detalle del tema
router.get('/topics/:id/edit', topicController.editTopicForm) //editar
router.put('/topics/:id', topicController.updateTopic) //actualizar
router.delete('/topics/:id', topicController.deleteTopic) //borrar
router.post('/topics/:id/vote', topicController.voteTopic) //votar

module.exports = router