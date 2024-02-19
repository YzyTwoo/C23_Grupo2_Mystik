module.exports = (sequelize, DataType) => {

    const alias = "Estados"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        estado:{
            type: DataType.STRING(255),
            allowNull: true
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
        tableName: 'Estados',
        timestamp: false
    }
    
    const Estados = sequelize.define(alias, colums, config)
    return Estados
    
}