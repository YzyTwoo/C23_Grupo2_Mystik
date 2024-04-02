const {body} = require('express-validator');
const db = require ('../database/models')

module.exports = [
    body('imagen_id').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Debe adjuntar una imagen');
        } else {
            const allowedExtensions = ['jpg', 'jpeg', 'png']; 
            const fileExtension = req.file.originalname.split('.').pop();
            if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
                throw new Error('Formato de imagen no válido. Por favor, adjunte una imagen en formato JPG, JPEG o PNG');
            }
        }
        return true;}).bail(),
    body('nombre').notEmpty().withMessage('Debe ingresar el nombre del producto').bail(),
    body('precio').notEmpty().withMessage('Debe ingresar el precio del producto').bail()
        .isNumeric().withMessage('El precio debe ser un valor numérico').bail(),
    body('descripcion').notEmpty().withMessage('Debe ingresar la descripción del producto')
        .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres')

]