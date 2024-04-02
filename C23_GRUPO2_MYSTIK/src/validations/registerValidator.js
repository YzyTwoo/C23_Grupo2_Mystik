const {body} = require ('express-validator');
const db = require('../database/models')

module.exports =[
    body('nombre').notEmpty().withMessage("Debe ingresar un nombre")
        .bail()
        .isLength({min:2}).withMessage("El valor ingresado debe tener al menos 2 caracteres")
        .bail()
        .custom((value, {req}) => {
            if (/\d/.test(value)) {
                throw new Error('El nombre no puede contener números');
            }
            
            return true;
        }),
    body('email')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato invalido').bail()
        .custom((value,{req})=>{
            return db.Usuario.findOne({
                where:{
                    email: value
                }
            }).then(user =>{
                if(user){
                    return Promise.reject()
                }
            }
            ).catch(error=> {
                console.log(error)
                return Promise.reject('El email ya se encuentra registrado')
            }
            )
        }), 
    body('contrasenia').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .isLength({min:6}).withMessage("La contraseña debe tener un minimo de 6")
]