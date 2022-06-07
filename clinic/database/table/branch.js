let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const branch = db.define("branch", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: true
    });
    return branch;
};