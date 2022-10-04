const mod1 = require('./mod1') // importar o modulo inteiro
const { nome, sobrenome } = require('./mod1') // estruturação via desestruturação
const falaNome = mod1.falaNome // or = require('./mod1').falaNome

console.log(mod1)
console.log(nome)
console.log(sobrenome)
console.log(falaNome())