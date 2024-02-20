module.exports = (sequelize, DataType) => {

    const alias = "Estado"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        estado:{
            type: DataType.STRING(255),
            allowNull: true
        }
    
    }

    const config = {
        tableName: 'estados',
        timestamp: true
    }
    
    const Estados = sequelize.define(alias, colums, config)
    return Estados
    
}