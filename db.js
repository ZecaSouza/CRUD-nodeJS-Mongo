const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/db_alunos'

mongoose.connect(url, {
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error ao conectar MongoDB'))
db.once('open', function callback(){
    console.log("Conectado ao MongoDB!")
})

module.exports = db