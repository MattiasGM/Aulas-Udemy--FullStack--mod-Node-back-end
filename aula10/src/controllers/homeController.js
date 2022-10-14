
exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.paginaInicialPost = (req, res) => {
    res.send('enviado')
}