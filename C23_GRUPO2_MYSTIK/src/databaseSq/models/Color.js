module.exports = (sequelize, DataType) => {

    const alias = "Color"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre_color:{
            type: DataType.STRING(255),
            allowNull: false
        }
    }

    const config = {
        tableName: 'colores',
        timestamp: false
    }
    
    const Colores = sequelize.define(alias, colums, config)
    return Colores
    
}