module.exports = (sequelize, DataType) => {

    const alias = "Talle"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre_talle:{
            type: DataType.STRING(90),
            allowNull: true
        }
    }

    const config = {
        tableName: 'talles',
        timestamp: false
    }
    
    const Talles = sequelize.define(alias, colums, config)
    return Talles
    
}