module.exports = (sequelize, DataType) => {

    const alias = "Imagenes"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        file:{
            type: DataType.STRING(255),
            allowNull: true
        },
        main:{
            type: DataType.TINYINT(1),
            allowNull: true
        },
        createdAt:{
            type: DataType.DATE,
            allowNull: false,
        },
        updatedAt:{
            type: DataType.DATE,
            allowNull: false,
        },
        productos_id:{
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true
        }
    }

    const config = {
        tableName: 'Imagenes',
        timestamp: false
    }
    
    const Imagenes = sequelize.define(alias, colums, config)
    return Imagenes
    
}