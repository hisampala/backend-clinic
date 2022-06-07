let repo = require('../../database').users
let company = require('../../database').company
let loginhistory = require('../../database').loginhistory
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let alert = require('../../constant/alert')
let privatekey = require('../../constant').privateKey
let { role } = require('../../constant/enum')
let jwt = require('jsonwebtoken');
let sequelize = require('../../database');
let storage = require('node-sessionstorage');
const { uuid } = require('uuidv4');
let singin = async (username, password) => {
    try {
        password = await fnc.ganaretepassword(password);
        let users = await repo.findAll({
            where: {
                username: username,
                password: password
            },
            include: [company],
            attributes: ['id', 'username', 'createdAt', 'role', 'status']
        })
        if (users.length === 1) {
            if (users[0].status === 0 && users[0].role !== role.ROOTADMIN) {
                return fnc.resStatus(status.ERROR, alert.singinIsProblemIsStatusDisble)
            }
            let token = await ganeretedTokenByDataUsers((users[0]));
            if (token == null) {
                return fnc.resStatus(status.ERROR, alert.singinIsProblem)
            }
            let objLogin = {
                token: token
            }
            await loginhistory.create(objLogin);
            let sessionItem = await fnc.encodedData(uuid())
            let objTokenAndDataStore = await objTokenAndDataStoreDefult(users[0], token, sessionItem);
            storage.setItem(sessionItem, await JSON.stringify(objTokenAndDataStore));
            return fnc.resData(await fnc.encodedData(JSON.stringify(objTokenAndDataStore)), status.SUCCESS, alert.singinSuccess)
        } else {
            return fnc.resStatus(status.ERROR, alert.errorIncorrectpassword)
        }
    } catch (error) {
        throw error
    }
}
let ganeretedTokenByDataUsers = async (users) => {
    try {
        let token = await jwt.sign(JSON.stringify(users), privatekey);
        return token;
    } catch (error) {
        return null;
    }

}
let verifyTokenByDataUsers = async (users) => {
    try {
        let item = await jwt.verify(JSON.parse(users), privatekey)
        return item;
    } catch (error) {
        return null;
    }
}
let checkclientlogin = async (session) => {
    let item = storage.getItem(session)
    if (!fnc.isNullOrundefined(item)) {
        return true
    } else {
        return false
    }
}
let checkIsNavigate = async (session) => {
    let itemtemp = storage.getItem(session)
    if (!fnc.isNullOrundefined(itemtemp)) {
        let item = JSON.parse(itemtemp)
        let rolestring = await fnc.encodedData('role')
        let role = await fnc.decodedData(await item[rolestring]);
        return true;
    } else {
        return false;
    }
}
let objTokenAndDataStoreDefult = async (users, token, session) => {
    let store = {}
    //companyId 
    let temp1 = await fnc.encodedData('companyId')
    store[temp1] = await fnc.encodedData(users.company.id);
    //role 
    let temp2 = await fnc.encodedData('role')
    store[temp2] = await fnc.encodedData(users.role);
    //token
    let temp3 = await fnc.encodedData('token')
    store[temp3] = token;
    //session
    let temp4 = await fnc.encodedData('session')
    store[temp4] = session
    //usersId
    let temp5 = await fnc.encodedData('usersId')
    store[temp5] = await fnc.encodedData(users.id);
    return store;
}

module.exports = {
    singin,
    checkclientlogin,
    checkIsNavigate,
    verifyTokenByDataUsers
}