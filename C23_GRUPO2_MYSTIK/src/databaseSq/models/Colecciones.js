module.exports = (sequelize, DataType) => {

    const alias = "Colecciones"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre_coleccion:{
            type: DataType.STRING(255),
            allowNull: true
        },
    }

    const config = {
        tableName: 'Colecciones',
        timestamp: true
    }
    
    const Colecciones = sequelize.define(alias, colums, config)
    return Colecciones
    
}