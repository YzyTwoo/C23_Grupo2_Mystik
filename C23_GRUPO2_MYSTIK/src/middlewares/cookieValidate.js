const cookieValidate = (req,res,next) =>{
    if (req.cookies.rememberMe && req.cookies.user){
        req.session.user = req.cookies.user;
        console.log("ESTA ES LA SESSION:", req.session.user); 
        }
        next();
    }

module.exports = cookieValidate;
