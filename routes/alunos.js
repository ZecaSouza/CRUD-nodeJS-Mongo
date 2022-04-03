const express = require('express')
const router = express.Router()

const alunoController = require('../controllers/alunoController')

router.get('/', alunoController.mostrar)

module.exports = router