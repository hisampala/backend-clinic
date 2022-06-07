
module.exports = (db, Sequelize) => {
    const typebooking = db.define("typebooking", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        typename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }, {
        timestamps: true
    });
    return typebooking;
};