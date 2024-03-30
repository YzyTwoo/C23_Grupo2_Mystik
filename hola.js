





login: (req, res) => {
    const errores = validationResult(req); // logueo de cuenta mas cookis para guardar en las vistas.

    if (!errores.isEmpty()) {
        console.log("errores:", errores.mapped());
        res.render("./users/login", {errores: errores.mapped(),title: "Login",usuarioLogeado: req.session.usuarioLogin});
        
    } else {
        const { email } = req.body;
        db.User.findOne({
            attributes: { exclude: ["password"] },
            where: {email,},
        })
            .then((user) => {
                console.log("user info:", user);
                req.session.usuarioLogin = user.dataValues;
                if (req.body.recuerdame == "true") {
                    const cookieUser = {
                        id: user.dataValues.id,
                        email: user.dataValues.email,
                        id_category: user.dataValues.id_category,
                        image: user.dataValues.image,
                    };
                    res.cookie("user", cookieUser, { maxAge: 1000 * 60 * 15 });
                    res.cookie("recuerdame", "true", { maxAge: 1000 * 60 * 15 });
                }
                res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
}


body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .custom((value, { req }) => {
            return db.User.findOne({
                where: { email: req.body.email }
            }).then(user => {
                if (!bcrypt.compareSync(value, user.dataValues.password)) {
                    return Promise.reject('Mal tipeo de contraseña')
                }
            }).catch(() => {
                return Promise.reject('Contraseña incorrecta')
            })
        })