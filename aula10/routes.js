const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoControll')

//Home Controll

route.get('/', homeController.paginaInicial)
route.post('/', homeController.paginaInicialPost)

// Contato Controll

route.get('/contato', contatoController.contatoControll)
route.post('/contato', contatoController.contatoControllPost)

module.exports = route