const express = require('express')
const router = express.Router()
const topicController = require('../controllers/topicController')

router.get('/', topicController.getAllTopics)
router.get('/topics/new', topicController.newTopicForm)
router.post('/topics', topicController.createTopic)
router.get('/topics/:id', topicController.getTopic)
router.get('/topics/:id/edit', topicController.editTopicForm)
router.put('/topics/:id', topicController.updateTopic)
router.delete('/topics/:id', topicController.deleteTopic)
router.post('/topics/:id/vote', topicController.voteTopic)

module.exports = router