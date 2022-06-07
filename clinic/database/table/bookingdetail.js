let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const bookingdetail = db.define("bookingdetail", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        queue:{
            type: Sequelize.STRING
        },
        datebooking:{
            type: Sequelize.DATE
        }
    }, {
        timestamps: true
    });
    return bookingdetail;
};