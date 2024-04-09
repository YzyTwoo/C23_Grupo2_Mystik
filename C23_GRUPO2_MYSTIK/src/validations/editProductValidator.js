const { body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    body('nombre').notEmpty().withMessage('Debe ingresar el nombre del producto.')
    .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres.').bail(),
    body('precio').notEmpty().withMessage('Debe ingresar el precio del producto.').bail()
        .isNumeric().withMessage('Debe ingresar un valor numerico.').bail(),
    body('descripcion').notEmpty().withMessage('Debe ingresar la descripción del producto.')
        .isLength({ min: 10 }).withMessage('La descripción debe tener 10 caracteres.').bail(),
    body('talles_id').notEmpty().withMessage('Debe seleccionar un talle para el producto.').bail(),
    body('categorias_id').notEmpty().withMessage('Debe seleccionar una categoría para el producto.').bail(),
    /*body('colores_id').notEmpty().withMessage('Debe seleccionar un color').bail(),*/
    body('stock').notEmpty().withMessage('Debe ingresar el stock del producto.').bail()
        .isInt({ min: -1 }).withMessage('El stock no puede ser negativo.').bail()
];
