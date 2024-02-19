module.exports = (sequelize, DataType) => {

    const alias = "Roles"

    const colums = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        rol:{
            type: DataType.STRING(255),
            allowNull: true
        }
    }

    const config = {
        tableName: 'Roles',
        timestamp: true
    }
    
    const Roles = sequelize.define(alias, colums, config)
    return Roles
    
}