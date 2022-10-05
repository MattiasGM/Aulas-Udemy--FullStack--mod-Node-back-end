const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
}


// 'Frase 1 *\n*' o \n é usado para quebrar a linha para cada frase
// flag: 'w' ele substitui a frase apagando a anterior
// flag: 'a' ele concatena (+=) (append) as frases