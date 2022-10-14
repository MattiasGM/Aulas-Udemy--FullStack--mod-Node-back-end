require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei ao banco de dados')
        app.emit('pronto')
    })
    .catch(e => console.error(e))

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middleware/middleware')

app.use(express.urlencoded({extend: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Meus Middleware
app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen('3001', () => {
        console.log('Servidor aberto na porta: http://localhost:3001')
    })
})
