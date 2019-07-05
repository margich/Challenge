module.exports = (sequelize, type) => {
    return sequelize.define('task', {
        task_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type:type.INTEGER(11),
            allowNull: false
        },
        personnel_id: {
            type:type.INTEGER(11),
            allowNull: false
        },
        task_status_id: {
            type:type.INTEGER(11),
            allowNull: false
        },
        created_by: {
            type:type.INTEGER(11),
            allowNull: false
        },
        created: {
            type:type.DATE,
            allowNull: false,
        },
        modified_by: {
            type:type.INTEGER(11),
            allowNull: false
        },
        last_modified: {
            ////////
            type:type.DATE,
            allowNull: true,
            defaultValue: type.NOW
        },
        in_progress: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        completed: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        deferred: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        customer_first_name: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        customer_last_name: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        customer_city: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        customer_username: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        inserted: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        personnel_first_name: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        personnel_other_name: {
            type:type.STRING(100),
            allowNull: true,
            defaultValue: null
        },
        personnel_phone: {
            type:type.STRING(50),
            allowNull: true,
            defaultValue: null
        },
        task_status_name: {
            type:type.STRING(50),
            allowNull: true,
            defaultValue: null
        },
        customer_location: {
            type:type.STRING(200),
            allowNull: true,
            defaultValue: null
        },
        customer_gender: {
            type:type.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        customer_age: {
            type:type.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        customer_access_code: {
            type:type.SMALLINT(1),
            allowNull: true,
            defaultValue: null
        },
        customer_splash_page: {
            type:type.SMALLINT(1),
            allowNull: true,
            defaultValue: null
        },
        customer_mpesa: {
            type:type.SMALLINT(1),
            allowNull: true,
            defaultValue: null
        },
        customer_autoplay: {
            type:type.SMALLINT(1),
            allowNull: true,
            defaultValue: null
        },
        customer_comments: {
            type:type.TEXT,
            allowNull: true
        },
        customer_updated: {
            type:type.DATE,
            allowNull: true,
            defaultValue: null
        },
        customer_updated_by: {
            type:type.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        agentId: {
            type:type.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        customerId: {
            type:type.BIGINT(20),
            allowNull: true,
            defaultValue: null
        },
    },
    {
        timestamps: false,
        tableName: 'task'
    })
}