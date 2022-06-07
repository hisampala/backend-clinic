let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const patient = db.define("patient", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idCard: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phonenumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true
        },
        congenitaldisease:{
            type: Sequelize.STRING,
        },
        drugallergy:{
            type: Sequelize.STRING,
            allowNull: true
        },
        pregnant:{
            type: Sequelize.BOOLEAN,
            defaultValue:true
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
    }, {
        timestamps: true
    });
    return patient;
};