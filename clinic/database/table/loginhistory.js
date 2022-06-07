
module.exports = (db, Sequelize) => {
    const loginhistory = db.define("loginhistory", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        datelogin: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
        datetimelogout: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true
    });
    return loginhistory;
};