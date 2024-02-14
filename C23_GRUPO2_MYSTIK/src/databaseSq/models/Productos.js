module.exports = (sequelize, DataType) => {

    const alias = "Productos"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre:{
            type: DataType.STRING(255),
            allowNull: false
        },
        precio:{
            type: DataType.DECIMAL,
            allowNull: false
        },
        descripcion:{
            type: DataType.STRING(500),
            allowNull: false,
        },
        // ???? quizás falte completar 14/2
        stock:{
            type: DataType.STRING(45),
            allowNull: true
        },
        // forange key
        colecciones_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        //forange key
        categoria_producto_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        //forange key
        color_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        //forange key
        talle_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    }

    const config = {
        tableName: 'Productos',
        timestamp: false
    }
    
    const Productos = sequelize.define(alias, colums, config)
    return Productos
    
}