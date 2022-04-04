const Aluno = require('../model/Aluno')

// mostrar
module.exports.mostrar = (req, res)=>{
    Aluno.find({}, (error, alunos)=>{
        if(error){
            return res.status(500).json({
                mensagem: 'Error ao mostrar alunos'
            })
        }
        return res.render('index', {alunos: alunos})
    })
}

// criar
module.exports.criar = (req, res)=>{
    //console.log(req.body)
    const aluno = new Aluno({
        nome: req.body.nome,
        idade: req.body.idade
    })
    aluno.save(function(error,aluno){
        if(error){
            return res.status(500).json({
                mensagem: 'Error ao cadastrar alunos'
            })
        }
        res.redirect('/')
    })
}