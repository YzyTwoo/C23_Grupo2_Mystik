module.exports = (sequelize, DataType) => {

    const alias = "Coleccion"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre_coleccion:{
            type: DataType.STRING(255),
            allowNull: true
        }
    }

    const config = {
        tableName: 'colecciones',
        timestamp: true
    }
    
    const Coleccion = sequelize.define(alias, colums, config)
    return Coleccion
    
}