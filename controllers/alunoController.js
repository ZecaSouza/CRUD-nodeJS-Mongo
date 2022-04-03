const Aluno = require('../model/Aluno')

// mostrar
module.exports.mostrar = (req, res)=>{
    Aluno.find({}, (error, alunos)=>{
        if(error){
            return res.status(500).json({
                mensagem: 'Error ao mostrar alunos'
            })
        }
        console.log(alunos)
    })
}

//teste