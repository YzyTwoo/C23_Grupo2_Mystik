const sessionValidate = (req,res,next)=>{
    if(req.session.user){
        console.log("existe sesion");
        next()
    }
    else {res.redirect("/users/login");
}
}
module.exports = sessionValidate