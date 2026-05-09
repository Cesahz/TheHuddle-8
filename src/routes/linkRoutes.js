const express = require('express')
const router = express.Router({ mergeParams: true }) //permite acceder a los parametros de la ruta padre
const linkController = require('../controllers/linkController')

router.post('/', linkController.createLink)
router.delete('/:linkId', linkController.deleteLink)
router.post('/:linkId/vote', linkController.voteLink)

module.exports = router