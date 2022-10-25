exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log()
    }

    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        console.error(err)
        return res.render('404')
    }

    next()
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}