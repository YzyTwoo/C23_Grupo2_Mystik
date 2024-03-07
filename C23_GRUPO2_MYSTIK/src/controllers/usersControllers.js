const fs = require('fs');
const {leerArchivo, setJson, cargarArchivo, getJson, uploadUser}= require('../database/dbLogica');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult}= require('express-validator')
const db = require('../database/models')


const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
    iniciarSession:(req, res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log(errors)
            res.render('users/login', {errors: errors.mapped(), old: req.body})
        } else {

        const { email, contrasenia } = req.body

        db.Usuario.findOne({
            where: {
                email: email 
            }
        })
        .then(user => {
            if (!user) {
                // si el usuario no existe // https://http.cat/status/401
                return res.status(401).send('Credenciales inválidas');
            }
            bcrypt.compare(contrasenia, user.contrasenia, (err, result) => {
                if(err){
                    console.log(err);
                }
                if (result) { // Si la contraseña es correcta
                    req.session.user = user;
                    res.cookie("user", user, { maxAge: 1000 * 60 * 15 });
                    if (req.body.remember == "true") {
                        res.cookie("rememberMe", "true", { maxAge: 1000 * 60 * 15 });
                    }
                    res.redirect("/");
                } else { // si la contraseña no es correcta
                    return res.status(401).send('Credenciales inválidas');
                    // no está autorizado // https://http.cat/status/401
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error interno del servidor');
            // https://http.cat/status/500
        });
        }
    },
    createUsers: (req,res)=>{
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const { nombre ,apellido,email,telefono,contrasenia, roles_id, imagen} = req.body;
            const file = req.file;
            const user ={
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                email: email.trim(),
                telefono,
                imagen: imagen ? imagen.filename : "default.png",
                contrasenia: bcrypt.hashSync(contrasenia,10),
                roles_id: roles_id ? roles_id : 2
            }
            db.Usuario.create(user)
            .then( user => {
                res.redirect('/users/login')
            })
            .catch(err => console.log(err))
        }else{
            return res.render('users/registro',{old:req.body, errors:errors.mapped()})
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