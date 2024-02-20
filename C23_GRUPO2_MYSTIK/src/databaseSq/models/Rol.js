module.exports = (sequelize, DataType) => {

    const alias = "Rol"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned: true,
            autoIncrement: true
        },
        rol:{
            type: DataType.STRING(255),
            allowNull: false
        }
    }

    const config = {
        tableName: 'roles',
        timestamp: true
    }
    
    const Roles = sequelize.define(alias, colums, config)
    return Roles
    
}