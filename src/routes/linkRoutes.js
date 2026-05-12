const express = require('express')
const router = express.Router({ mergeParams: true }) //permite acceder a los parametros de la ruta
const linkController = require('../controllers/linkController')

//usar los metodos para los enlaces
router.post('/', linkController.createLink) //crear link
router.delete('/:linkId', linkController.deleteLink) //borrar link
router.post('/:linkId/vote', linkController.voteLink) //votar link

module.exports = router