const {body} = require('express-validator');
const {leerArchivo} = require('../database/dbLogica')
const bcrypt = require('bcryptjs')
const db = require('../database/models')


module.exports = validationLogin = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
    .trim().isEmail().withMessage('Ingrese un email válido').bail()
    .custom((value,{req})=>{
        return db.Usuario.findOne({
            where:{
                email: value
            }
        }).then(user =>{
            if(!user){
                return Promise.reject()
            }
        }
        ).catch(error=> {
            console.log(error)
            return Promise.reject('credenciales invalidas')
        }
        )
    }),

    body('contrasenia').trim().notEmpty().withMessage('Este campo es obligatorio').bail()
    .custom((value,{req}) =>{
    return db.Usuario.findOne({
        where:{
            contrasenia: value
        }
    }).then(user => {
        if(!user){
            return  Promise.reject()
        }
    }
    ).catch(error => {
        console.log(error)
        return Promise.reject('credenciales invalidas')
    })
    })

]