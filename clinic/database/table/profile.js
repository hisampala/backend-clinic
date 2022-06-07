let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const profile = db.define("profile", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lineid: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        imgurl:{
            type: Sequelize.STRING,
            allowNull: true,
        }
       
    }, {
        timestamps: true
    });
    return profile;
};