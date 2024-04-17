const cookieValidate = (req,res,next) =>{
    if (req.cookies.rememberMe && req.cookies.user){
            console.log("ESTA ES LA SESSION:", req.session.user); req.session.user = req.cookies.user;
        }
        next();
    }

module.exports = cookieValidate;
