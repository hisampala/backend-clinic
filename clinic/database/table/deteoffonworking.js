let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const datatimeoofworking = db.define("datatimeoofworking", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        deteUUId: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        dete: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        status:{
            type:Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: true
    });
    return datatimeoofworking;
};