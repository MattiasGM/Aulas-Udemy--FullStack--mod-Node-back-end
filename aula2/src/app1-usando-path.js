const path = require('path')

const Cachorro = require(path.resolve(__dirname, '..', 'modules', 'mod1'))

const cachorrinho = new Cachorro('Dogo')
cachorrinho.latir()
