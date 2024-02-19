module.exports = (sequelize, DataType) => {

    const alias = "Direcciones"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        direccion:{
            type: DataType.STRING(255),
            allowNull: true
        },
        ciudad:{
            type: DataType.STRING(255),
            allowNull: true
        },
        provincia:{
            type: DataType.STRING(255),
            allowNull: true
        },
        // forange key
        usuarios_id:{
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true
        }
    }

    const config = {
        tableName: 'Direcciones',
        timestamp: true
    }
    
    const Direcciones = sequelize.define(alias, colums, config)
    return Direcciones
    
}