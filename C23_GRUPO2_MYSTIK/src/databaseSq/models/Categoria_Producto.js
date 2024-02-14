module.exports = (sequelize, DataType) => {

    const alias = "Categoria_Producto"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre_categoria:{
            type: DataType.STRING(255),
            allowNull: true
        }
    }

    const config = {
        tableName: 'Categoria_Producto',
        timestamp: false
    }
    
    const Categoria_Producto = sequelize.define(alias, colums, config)
    return Categoria_Producto
    
}