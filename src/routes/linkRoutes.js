const express = require('express')
const router = express.Router({ mergeParams: true })
const linkController = require('../controllers/linkController')

router.post('/', linkController.createLink)
router.delete('/:linkId', linkController.deleteLink)
router.post('/:linkId/vote', linkController.voteLink)

module.exports = router