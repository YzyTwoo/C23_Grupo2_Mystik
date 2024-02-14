module.exports = (sequelize, DataType) => {

    const alias = "Colores"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre_color:{
            type: DataType.STRING(255),
            allowNull: false
        }
    }

    const config = {
        tableName: 'Colores',
        timestamp: false
    }
    
    const Colores = sequelize.define(alias, colums, config)
    return Colores
    
}