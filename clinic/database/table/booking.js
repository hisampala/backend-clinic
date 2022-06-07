let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const booking = db.define("booking", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        bookingcode: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        bookingstatus: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: true
    });
    return booking;
};