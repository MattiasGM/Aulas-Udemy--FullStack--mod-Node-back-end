const express = require('express')
const app = express()

app.use(express.urlencoded({extend: true}))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button> enviar </button>
        </form>
    `)
})

// /params/3 - fazer referencia a um parametro
//  inicia "?"  atribuir valor "="  separar query "&"
// /params/?query=0&query=1&query=2 - fazer referenci as querys >>>> 
//se inicia com ?
//cada query é separada com &
//para atribuir um valor para cada query usa o =

app.get('/testes/:idUsers?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('hello')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você enviou é: ${req.body.nome}`)
})

app.listen('3000', () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})