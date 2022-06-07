let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const lineregister = db.define("lineregister", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        lineregisterUUId: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        }
    }, {
        timestamps: true
    });
    return lineregister;
};