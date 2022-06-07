let singin = require('../singin')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let alert = require('../../constant/alert')
let authorization = async (req, res, next) => {
    const authHeader = String(req.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
        const token = await authHeader.substring(7, authHeader.length);
        if (!fnc.isNullOrundefined(token)) {
            const user = await singin.verifyTokenByDataUsers(token)
            if (!fnc.isNullOrundefined(user)) {
                next()
            } else {
                res.send(await fnc.resStatus(status.WARNING, alert.pleasLogin))
            }
        } else {
            res.send(await fnc.resStatus(status.WARNING, alert.pleasLogin))
        }

    }

}

module.exports = authorization