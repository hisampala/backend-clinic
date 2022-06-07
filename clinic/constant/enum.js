const roleusers = ['rootadmin', 'admin', 'users']
const statususers = ['disable', 'active']
const statuslivedata = ['public', 'private', 'close']
const bookingstatus = ['process', 'appove', 'succcess', 'complete']
const role = {
    ROOTADMIN: 0,
    ADMIN: 1,
    USERS: 2
}
module.exports = {
    roleusers,
    statususers,
    bookingstatus,
    statuslivedata,
    role
}