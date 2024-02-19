module.exports = (sequelize, DataType) => {

    const alias = "Ordenes"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        total:{
            type: DataType.INTEGER,
            allowNull: true
        },
        // forange key
        estado_id:{
            type: DataType.INTEGER,
            allowNull: true
        },
        // forange key
        usuario_id:{
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true
        },
        createdAt:{
            type: DataType.DATE,
            allowNull: false
        },
        updatedAt:{
            type: DataType.DATE,
            allowNull: false
        }
    }

    const config = {
        tableName: 'Ordenes',
        timestamp: false
    }
    
    const Ordenes = sequelize.define(alias, colums, config)
    return Ordenes
    
}