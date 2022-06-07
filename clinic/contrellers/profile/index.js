let repo = require('../../database').profile
let users = require('../../database').users
let company = require('../../database').company
let sequelize = require('../../database')
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let createrepo = async (item) => {
    try {
        let result = await repo.create(item)
        return result
    } catch (error) {
        throw fnc.resStatus(status.ERROR, alert.errorCreate)
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
    try {
        let transaction = await sequelize.connect.transaction();
        let result = await users.destroy({
            where: {
                id: id
            }
        })
        if (result) {
            await transaction.commit();
            return {
                status: status.SUCCESS,
                msg: alert.successDelete
            }

        } else {
            return fnc.resStatus(status.ERROR, alert.errorDelete)
        }
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw fnc.resStatus(status.ERROR, alert.successDelete)
    }
}
let getrepos = async () => {
    try {
        let result = await users.findAll({
            include: [{ model: company, required: false }, repo],
            attributes: ['id', 'username', 'createdAt', 'role']
        })
        return ganaretedProfile(result)
    } catch (error) {
        throw (error)
    }

}
let getrepoById = async (id) => {
    try {
        const result = await repo.findByPk(id);
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
            attributes: [key]
        });
        return result
    } catch (error) {
        throw (error)
    }

}
let ganaretedProfile = async (list) => {
    let allProfile = []
    await list.forEach(element => {
        let profile = {
            firstname: element.profile.firstname,
            lastname: element.profile.lastname,
            phone: element.profile.phone,
            email: element.profile.email,
            company: element.company.name,
            createdAt: element.createdAt,
            role:element.role,
            id: element.id
        }
        allProfile.push(profile)
    });

    return allProfile
}
module.exports = {
    createrepo,
    updaterepo,
    deleterepo,
    getrepos,
    getrepoById,
    getrepoByCondition
}