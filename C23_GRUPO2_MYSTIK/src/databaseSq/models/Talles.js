module.exports = (sequelize, DataType) => {

    const alias = "Talles"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre_talle:{
            type: DataType.STRING(90),
            allowNull: true
        }
    }

    const config = {
        tableName: 'Talles',
        timestamp: false
    }
    
    const Talles = sequelize.define(alias, colums, config)
    return Talles
    
}