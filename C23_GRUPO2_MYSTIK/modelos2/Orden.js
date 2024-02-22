module.exports = (sequelize, DataType) => {

    const alias = "Orden"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        total:{
            type: DataType.INTEGER,
            allowNull: true
        }
        // forange key
        // estado_id:{
        //     type: DataType.INTEGER,
        //     allowNull: true
        // },
        // // forange key
        // usuario_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false,
        //     unsigned: true
        // }
    }

    const config = {
        tableName: 'ordenes',
        timestamp: true
    }
    
    const Ordenes = sequelize.define(alias, colums, config)
    return Ordenes
    
}