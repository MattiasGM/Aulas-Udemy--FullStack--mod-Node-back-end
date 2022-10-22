exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log()
    }

    next()
}

exports.checkCsrfError = (req, res, next) => {

    next()
}
exports.csrfMiddleware = (req, res, next) => {

    next()
}