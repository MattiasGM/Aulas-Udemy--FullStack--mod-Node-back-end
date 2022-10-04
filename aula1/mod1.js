const nome = 'Luiz'
const sobrenome = 'Miranda'

const falaNome = () => `${nome} ${sobrenome}`

//module.exports.nome = nome // codigo extendido

exports.nome = nome  // codigo mais compacto com mesmo resultado
exports.sobrenome = sobrenome  // codigo mais compacto com mesmo resultado
exports.falaNome = falaNome  // codigo mais compacto com mesmo resultado

//console.log(module.exports)
//console.log(exports)