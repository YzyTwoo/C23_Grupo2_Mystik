module.exports = (sequelize, DataType) => {

    const alias = "Item"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        cantidad:{
            type: DataType.INTEGER,
            allowNull: true
        }
        // orden_id:{
        //     type: DataType.INTEGER,
        //     allowNull: true
        // },
        // productos_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false,
        //     unsigned: true,
        // }
    
    }

    const config = {
        tableName: 'items',
        timestamp: true
    }
    
    const Items = sequelize.define(alias, colums, config)
    return Items
    
}