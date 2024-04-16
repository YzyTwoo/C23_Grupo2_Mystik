const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../database/models');

const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
    login:(req, res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log("errores:", errors.mapped())
            res.render('users/login', {errors: errors.mapped(), old: req.body})

        } else {
        const { email } = req.body
        db.Usuario.findOne(
            {
            attributes: { exclude: ["password"] },
            where: {
                email: email 
            }
        })
        .then(user => {
            console.log("Info usuario:", user);
            req.session.user = user.dataValues;

            if (req.body.remember == "true") {
                const cookieUser = {
                    id: user.dataValues.id,
                    email: user.dataValues.email,
                    image: user.dataValues.image,
                    nombre: user.dataValues.nombre,
                    roles_id: user.dataValues.roles_id
                };
                res.cookie("user", cookieUser, { maxAge: 1000 * 60 * 15 });
                res.cookie("rememberMe", "true", { maxAge: 1000 * 60 * 15 });
            }
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error interno del servidor');
        });
        }
    },
    createUsers: (req, res) => {
        const errors = validationResult(req)
    
        if (errors.isEmpty()) {
            const { nombre, email, contrasenia } = req.body;
            const user = {
                nombre: nombre.trim(),
                email: email.trim(),
                contrasenia: bcrypt.hashSync(contrasenia, 10),
                roles_id: 2
            };
    
            db.Usuario.create(user)
                .then(user => {
                    res.redirect('/users/login');
                })
                .catch(err => {
                    console.log(err)
                    res.render('error')
                });
        } else {
            return res.render('users/registro', { old: req.body, errors: errors.mapped() });
        }
    },
    perfil: (req, res) => {
        const { id } = req.params;
        db.Usuario.findByPk(id)
            .then(user => {
                if (!user) {
                    return res.status(404).send('Usuario no encontrado');
                }
                res.render('users/actualizarPerfil', { title: 'Editar Perfil', user: user, usuario: req.session.user });
            })
            .catch(error => {
                console.log('Error al obtener usuario:', error);
                res.status(404).send('Not found');
            });
    },
    perfilEditar: (req, res) => {
        const errors = validationResult(req);
        const { id } = req.params;
    
        if (!errors.isEmpty()) {
            console.log('Errores de validación:', errors.array());
            db.Usuario.findByPk(id)
                .then(user => {
                    if (!user) {
                        return res.status(404).send('Usuario no encontrado');
                    }
                    res.render('users/actualizarPerfil', {
                        title: 'Editar Perfil',
                        user: user,
                        usuario: req.session.user,
                        errors: errors.mapped(),
                        old: req.body
                    });
                })
                .catch(error => {
                    console.error('Error al buscar usuario:', error);
                    res.status(404).send('NOT FOUND');
                });
        } else {
            console.log('Datos recibidos para actualizar:', req.body);
            const id = req.params.id;
            const { nombre, email, telefono, contrasenia, genero, nacimiento } = req.body;
    
            if (contrasenia) {
                const hashedPassword = bcrypt.hashSync(contrasenia, 10);
                db.Usuario.update(
                    {
                        nombre: nombre.trim(),
                        email: email.trim(),
                        telefono: telefono,
                        genero: genero,
                        nacimiento: nacimiento,
                        contrasenia: hashedPassword
                    },
                    {
                        where: { id: id }
                    }
                )
                .then(filasActualizadas => {
                    if (filasActualizadas[0] === 0) {
                        return res.status(404).send('Usuario no encontrado');
                    }
                    
                    console.log('Usuario actualizado con éxito:', id);
    
                    if (req.session.user) {
                        req.session.user.nombre = nombre.trim();
                        req.session.user.email = email.trim();
                        req.session.user.telefono = telefono;
                        req.session.user.genero = genero;
                        req.session.user.nacimiento = nacimiento;

                        delete req.session.user.password;
                        res.cookie('user', req.session.user);
                    }
    
                    res.redirect('/');
                })
                .catch(error => {
                    console.error('Error al actualizar usuario:', error);
                    res.status(500).send('Error interno del servidor');
                });
            } else { // En caso de que el usuario no quiera cambiar su contraseña
                db.Usuario.update(
                    {
                        nombre: nombre.trim(),
                        email: email.trim(),
                        telefono: telefono,
                        genero: genero,
                        nacimiento: nacimiento
                    },
                    {
                        where: { id: id }
                    }
                )
                .then(filasActualizadas => {
                    if (filasActualizadas[0] === 0) {
                        return res.status(404).send('Usuario no encontrado');
                    }
                    
                    req.session.user.nombre = nombre.trim();
                    req.session.user.email = email.trim();
                    req.session.user.telefono = telefono;
                    req.session.user.genero = genero;
                    req.session.user.nacimiento = nacimiento;
    
                    res.cookie('user', req.session.user);
    
                    res.redirect('/');
                })
                .catch(error => {
                    console.error('Error al actualizar usuario:', error);
                    res.status(404).send('NOT FOUND');
                });
            }
        }
    },
    logout:(req,res)=>{
        req.session.destroy();
        if (req.cookies.user) {
        res.clearCookie('userEmail');
        res.clearCookie('rememberMe');
        res.clearCookie('user');
        }
        res.redirect('/');
    },
    dashboard:(req,res)=>{
        res.send(req.session.user)
}
}

module.exports = usersControllers;