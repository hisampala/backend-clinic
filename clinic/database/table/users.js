let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const users = db.define("users", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        role: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
    }, {
        timestamps: true
    });
    return users;
};