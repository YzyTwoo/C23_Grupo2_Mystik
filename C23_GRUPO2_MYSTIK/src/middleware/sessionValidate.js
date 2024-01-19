const sessionValidate = (req, res, next) =>{
    if (req.session.usuario){
        next()
    }
    res.redirect("/")
}
module.exports = sessionValidate;