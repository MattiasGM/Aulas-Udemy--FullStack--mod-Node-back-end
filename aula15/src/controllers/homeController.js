
exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.paginaInicialPost = (req, res) => {
    res.send('enviado')
    return
}