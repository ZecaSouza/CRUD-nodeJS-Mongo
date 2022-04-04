const express = require('express')
const router = express.Router()

const alunoController = require('../controllers/alunoController')

//mostrar todos os alunos (GET)
router.get('/', alunoController.mostrar)

//criar aluno (POST)
router.post('/criar',alunoController.criar )

module.exports = router