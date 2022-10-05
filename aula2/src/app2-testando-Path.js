const path = require('path') // path, modulo padrão do node

//path.resolve - o path vai se virar para encontrar (diretorio ou arquivo) o que estou buscando, independente do sistema operacional

// __dirname - para buscar diretorio
// __filename - para buscar arquivo
// exemplo abaixo de buscar um diretorio para rodar em todos os sistemas operacionais.
console.log(path.resolve(__dirname,'..','modules'))