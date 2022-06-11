
try {
    const dbConfig = require("./config");
    const Sequelize = require("sequelize");
    const db = {};
    const connect = require("./connect");
    db.Sequelize = Sequelize;
    db.connect = connect(dbConfig);
    ///model///
    const model = require('./table')
    db.booking = model.booking(db.connect, db.Sequelize);
    db.bookingdetail = model.bookingdetail(db.connect, db.Sequelize);
    db.branch = model.branch(db.connect, db.Sequelize);
    db.company = model.company(db.connect, db.Sequelize);
    db.datetime = model.dateon(db.connect, db.Sequelize);
    db.lineregister = model.lineregister(db.connect, db.Sequelize);
    db.loginhistory = model.loginhistory(db.connect, db.Sequelize)
    db.patient = model.patient(db.connect, db.Sequelize);
    db.profile = model.profile(db.connect, db.Sequelize);
    db.room = model.room(db.connect, db.Sequelize);
    db.users = model.users(db.connect, db.Sequelize);
    db.typebooking = model.typebooking(db.connect, db.Sequelize);
    ///relatad///
    const relation = require('./related')
    relation.companyrelationbooking = relation.companyrelationbooking(db);
    relation.companyrelationbookingdetail = relation.companyrelationbookingdetail(db)
    relation.bookingrelationbookingdetail = relation.bookingrelationbookingdetail(db);
    relation.usersrelationbooking = relation.usersrelationbooking(db);
    relation.patientrelationbooking = relation.patientrelationbooking(db);
    relation.roomrelationtobookingdetail = relation.roomrelationtobookingdetail(db);
    relation.usersrelationtoprofile = relation.usersrelationtoprofile(db);
    relation.companyrelationbranch = relation.companyrelationbranch(db);
    relation.usersrelationtcompany = relation.usersrelationtcompany(db);
    relation.usersrelationpatient = relation.usersrelationpatient(db);
    relation.companyrelationpatient = relation.companyrelationpatient(db);
    relation.typebookingrelatetionbooking = relation.typebookingrelatetionbooking(db);
    relation.companyrelationtotypebooking = relation.companyrelationtotypebooking(db);
    
    
    
    module.exports = db
} catch (error) {
    console.log(error);
}


