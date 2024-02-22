module.exports = (sequelize, DataType) => {

    const alias = "Categoria"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
            
        },
        nombre_categoria:{
            type: DataType.STRING(255),
            allowNull: false
        }
    }

    const config = {
        tableName: 'categorias',
        timestamp: false
    }
    
    const Categoria = sequelize.define(alias, colums, config)
    return Categoria
    
}