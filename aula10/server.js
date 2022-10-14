const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extend: true}))
app.use(routes)

app.listen('3001', () => {
    console.log('Servidor aberto na porta: http://localhost:3001')
})