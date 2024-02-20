module.exports = (sequelize, DataType) => {

    const alias = "Imagen"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        file:{
            type: DataType.STRING(255),
            allowNull: true
        },
        path:{
            type: DataType.STRING(255),
            allowNull: true
        }
        // productos_id:{
        //     type: DataType.INTEGER,
        //     allowNull: false,
        //     unsigned: true
        // }
    }

    const config = {
        tableName: 'imagenes',
        timestamp: true
    }
    
    const Imagenes = sequelize.define(alias, colums, config)
    return Imagenes
    
}