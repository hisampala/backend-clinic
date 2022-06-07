let enums = require('../../constant/enum')
module.exports = (db, Sequelize) => {
    const company = db.define("company", {
        id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        provinces_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        amphures_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        tombons_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        }
    }, {
        timestamps: true
    });
    return company;
};