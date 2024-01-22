const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
        console.log("body:", req.body)
        
        //checkbox//
        if(req.body.remember == 'true') {
            res.cookie('rememberMe', 'true', {maxAge: 1000 * 60 * 15 })
        }
        res.redirect('/')
    },

    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
} 

module.exports = usersControllers;