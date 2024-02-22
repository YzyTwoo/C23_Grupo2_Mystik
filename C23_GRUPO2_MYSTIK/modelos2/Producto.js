module.exports = (sequelize, DataType) => {

    const alias = "Producto"

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
            type: DataType.DECIMAL(6,2),
            allowNull: false,
            unsigned: true
        },
        descripcion:{
            type: DataType.STRING(500),
            allowNull: false,
        },
        stock:{
            type: DataType.STRING(45),
            allowNull: true
        }
        // forange key
        // colecciones_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false
        // },
        // //forange key
        // categoria_producto_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false
        // },
        // //forange key
        // color_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false
        // },
        // //forange key
        // talle_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false
        // }
    }

    const config = {
        tableName: 'productos',
        timestamp: false
    }
    
    const Productos = sequelize.define(alias, colums, config)
    return Productos
    
}