const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen('3001', () => {
    console.log('Servidor aberto na porta: http://localhost:3001')
})