let repo = require('../../database').users
let sequelize = require('../../database')
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let profile = require('../profile')
let status = require('../../constant/status').status

let createrepo = async (item) => {
    //starttransaction
    let transaction = await sequelize.connect.transaction();
    try {
        let ganareteuser = await ganaretedUser(item);
        if (!fnc.isNullOrundefined(ganareteuser.id)) {
            item.userId = ganareteuser.id
            let result = await ganaretedprofile(item)
            console.log(result);
            await transaction.commit();
            return fnc.resData(result[0], status.SUCCESS, alert.successCreate)
        } else if(ganareteuser.alreadyexists) {
            return fnc.resStatus(status.ERROR,'มีผู้ใช้นี้แล้วโปรดลองใหม่อีกครั้ง')
        }
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error
    }
}
let updaterepo = async (id, item) => {
    try {
        let result = await repo.findByPk(id);
        let update = await repo.update(item, {
            where: {
                id: result.id
            }
        })
        if (update) {
            let data = await repo.findByPk(id);
            return data
        }
    } catch (error) {
        throw error
    }

}
let deleterepo = async (id) => {
    let result = await repo.destroy({
        where: {
            id: id
        }
    })
    if (result) {
        return {
            status: status.SUCCESS,
            msg: alert.successDelete
        }
    } else {
        return fnc.resStatus(status.ERROR, alert.errorDelete)
    }
}
let getrepos = async () => {
    try {
        let result = await repo.findAll()
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoById = async (id) => {
    try {
        const result = await repo.findByPk(id, {
            attributes: ['uername', 'id', 'role']
        });
        console.log(result);
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoByCondition = async (key, Condition) => {
    try {
        // console.log(key,Condition);
        const result = await repo.findAll({
            where: Condition,
            attributes: key
        });
        return result
    } catch (error) {
        throw (error)
    }

}
let checkusername = async (item) => {
    try {
        let result = await repo.findAll({
            where: [
                item
            ]
        })
        if (result.length === 1) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw (error)
    }
}
let ganaretedUser = async (item) => {
    let user = await { username: item.username }
    let checkhaveuser = await checkusername(user);
    if (checkhaveuser) {
        return { alreadyexists: 'This username already exists.' };
    } else {
        let pass = await fnc.ganaretepassword(item.password);
        item.password = await pass;
        let result = await repo.create(item)
        if (!fnc.isNullOrundefined(result.id)) {
            return result;
        } else {
            return false
        }
    }
}
let ganaretedprofile = async (item) => {
    let profileObj = {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        address: item.address,
        phone: item.phone,
        email: item.email,
        lineid: item.lineid,
        detail: item.detail,
        imgurl: item.imgurl,
        userId: item.userId
    }
    let result = await profile.createrepo(profileObj);
    console.log(result);
    return result;
}
module.exports = {
    createrepo,
    updaterepo,
    deleterepo,
    getrepos,
    getrepoById,
    getrepoByCondition
}