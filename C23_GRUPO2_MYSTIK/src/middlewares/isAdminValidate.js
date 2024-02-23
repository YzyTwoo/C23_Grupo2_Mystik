const isAdminValidate = (req, res, next) => {
/*     console.log("este seria la session ",req.session.user )
    console.log("este seria la session rol ",req.session.user.rol ) */
    if( req.session.user && req.session.user.rol == "admin"){
        next()
    }
    else {
        res.redirect('/')
    }
}
module.exports = isAdminValidate;