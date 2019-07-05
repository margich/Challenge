module.exports = (sequelize, type) => {
    return sequelize.define('personnel', {
        personnel_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        personnel_onames: {
            type:type.STRING(45),
            allowNull: true,
            defaultValue: null
        },
        personnel_fname: {
            type:type.STRING(20),
            allowNull: false
        },
        personnel_email: {
            type:type.STRING(45),
            allowNull: true,
            defaultValue: null
        },
        personnel_phone: {
            type:type.STRING(45),
            allowNull: true,
            defaultValue: null
        },
        personnel_password: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: 'e10adc3949ba59abbe56e057f20f883e',
        },
        personnel_status: {
            type:type.SMALLINT(1),
            allowNull: false,
            defaultValue: 1
        },
        last_login: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        personnel_type_id: {
            type:type.INTEGER(11),
            allowNull: true,
            defaultValue: 1
        },
        reset_password: {
            type:type.SMALLINT(1),
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false,
        tableName: 'personnel'
    })
}