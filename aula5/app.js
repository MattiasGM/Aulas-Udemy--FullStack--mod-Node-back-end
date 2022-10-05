const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'test.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'Eduardo'},
//     {nome: 'Maisa'},
//     {nome: 'Karla'},
//     {nome: 'Joao'},
//     {nome: 'Luiza'},
// ]
// const json = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo)

// const dadosArquivos = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))