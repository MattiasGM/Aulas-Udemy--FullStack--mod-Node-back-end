
exports.contatoControll = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <button> Entrar em Contato </button>
        </form>
    `)
}

exports.contatoControllPost = (req, res) => {
    res.send('email: masmdasd@asn.com')
}