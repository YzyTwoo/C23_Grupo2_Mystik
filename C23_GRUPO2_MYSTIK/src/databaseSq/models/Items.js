module.exports = (sequelize, DataType) => {

    const alias = "Items"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        cantidad:{
            type: DataType.INTEGER,
            allowNull: true
        },
        orden_id:{
            type: DataType.INTEGER,
            allowNull: true
        },
        productos_id:{
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true,
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
        tableName: 'Items',
        timestamp: false
    }
    
    const Items = sequelize.define(alias, colums, config)
    return Items
    
}