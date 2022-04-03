const express = require('express');
const req = require('express/lib/request');
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const alunos = require('./routes/alunos')
app.use(alunos)

app.get('/', (req, res)=>{
    res.send('Olá mundo')
})

app.listen(3000, ()=>{
    console.log('Server UP! em http://localhost:3000')
})