module.exports = (sequelize, DataType) => {

    const alias = "Usuarios"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        nombre:{
            type: DataType.STRING(255),
            allowNull: false
        },
        apellido:{
            type: DataType.STRING(255),
            allowNull: false
        },
        email:{
            type: DataType.STRING(255),
            allowNull: false,
            unique: true
        },
        contrasenia:{
            type: DataType.STRING(255),
            allowNull: false
        },
        imagen:{
            type: DataType.STRING(255),
            allowNull: false
        },
        telefono:{
            type: DataType.STRING(255),
            allowNull: false
        },
        genero:{
            type: DataType.STRING(255),
            allowNull: true
        },
        nacimiento:{
            type: DataType.DATE,
            allowNull: true
        },
        //forange key
        roles_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
    }

    const config = {
        tableName: 'usuarios',
        timestamp: true
    }
    
    const Usuarios = sequelize.define(alias, colums, config)
    return Usuarios
    
}