
// só para mostrar um exemplo de modulo padrão do node
const path = require('path')

// mostrando um exemplo de modulo instalado no node
const axios = require('axios')

// mostrando um exemplo de modulo que o dev cria em outro arquivo
const { Pessoa } = require('./mod2')

const p1 = new Pessoa('Luiz')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
    