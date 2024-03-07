const sessionValidate = (req,res,next)=>{
    if(req.session.user || req.session.usuario){
        next()
    } else {
        res.redirect("/users/login");
    }
}

module.exports = sessionValidate