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

//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nome = req.body.nome_editar
    const idade = req.body.idade_editar
    Aluno.findByIdAndUpdate(id, {nome, idade},(error, aluno)=>{
        if(error){
            return res.status(500).json({
                mensagem: 'Error ao atualizar alunos'
            })
        }
        res.redirect('/')
    })
}

//deletar
module.exports.excluir = (req, res)=>{
    const id = req.params.id
    Aluno.findByIdAndRemove(id, (error, aluno)=>{
        if(error){
            return res.status(500).json({
                mensagem: 'Error ao excluir aluno'
            })
        }
        res.redirect('/')
    })
}