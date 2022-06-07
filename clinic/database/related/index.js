let bookingrelationbookingdetail = (db) => {
    db.booking.hasOne(db.bookingdetail);
    db.bookingdetail.belongsTo(db.booking);
}
let usersrelationbooking = (db) => {
    db.users.hasOne(db.booking);
    db.booking.belongsTo(db.users);
}
let patientrelationbooking = (db) => {
    db.patient.hasMany(db.booking);
    db.booking.belongsTo(db.patient);
}

let roomrelationtobookingdetail = (db) => {
    db.room.hasOne(db.bookingdetail);
    db.bookingdetail.belongsTo(db.room);
}
let usersrelationtoprofile = (db) => {
    db.users.hasOne(db.profile);
    db.profile.belongsTo(db.users);
}
let usersrelationtcompany = (db) => {
    db.company.hasOne(db.users);
    db.users.belongsTo(db.company);
}
let companyrelationbranch = (db) => {
    db.company.hasOne(db.branch);
    db.branch.belongsTo(db.company);
}
let companyrelationbooking = (db) => {
    db.company.hasMany(db.booking);
    db.booking.belongsTo(db.company);
}
let companyrelationbookingdetail = (db) => {
    db.company.hasMany(db.bookingdetail);
    db.bookingdetail.belongsTo(db.company);
}
let companyrelationpatient = (db) => {
    db.company.hasMany(db.patient);
    db.patient.belongsTo(db.company);
}
let usersrelationpatient = (db) => {
    db.users.hasOne(db.patient);
    db.patient.belongsTo(db.users);
}
let typebookingretationbooking = (db) => {
    db.typebooking.hasMany(db.booking);
    db.booking.belongsTo(db.typebooking);
}
module.exports = {
    bookingrelationbookingdetail,
    usersrelationbooking,
    patientrelationbooking,
    roomrelationtobookingdetail,
    usersrelationtoprofile,
    companyrelationbranch,
    usersrelationtcompany,
    companyrelationpatient,
    usersrelationpatient,
    companyrelationbooking,
    companyrelationbookingdetail,
    typebookingretationbooking
}