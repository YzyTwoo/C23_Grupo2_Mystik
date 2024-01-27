const sessionValidate = (req, res, next) =>{
    if (req.session.usuario){
        next()
    }
    res.redirect("/users/login")
}
module.exports = sessionValidate;