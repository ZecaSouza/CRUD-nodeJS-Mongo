const express = require('express')
const router = express.Router()

const alunoController = require('../controllers/alunoController')

//mostrar todos os alunos (GET)
router.get('/', alunoController.mostrar)

//criar aluno (POST)
router.post('/criar',alunoController.criar )

//editar aluno (POST)
router.post('/editar',alunoController.editar )

module.exports = router