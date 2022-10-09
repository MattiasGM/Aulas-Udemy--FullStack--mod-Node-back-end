const express = require('express')
const app = express()

//         Criar  ler  atualizar apagar
// CRUD -> CREAT, READ, UPDATE, DELETE
//         POST   GET   PUT     DELETE

// https://meusite.com/ <- GET -> Entrega a página /
// https://meusite.com/sobre <- GET -> Entrega a página /sobre
// https://meusite.com/contato <- GET -> Entrega a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button> enviar </button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
