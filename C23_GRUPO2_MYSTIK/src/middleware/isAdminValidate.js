const isAdminValidate = (req, res, next) => {
    if( req.session.usuario && req.session.usuario.rol == "admin"){
        next()
    }
    res.redirect('/')
}
module.exports = isAdminValidate;