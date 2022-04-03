const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alunoSchema = new Schema({
    nome: String,
    idade: Number
}, {versionKey:false})

mongoose.exports = mongoose.model('Alunos', alunoSchema)