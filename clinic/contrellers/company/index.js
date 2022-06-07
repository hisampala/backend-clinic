let repo = require('../../database').company
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let createrepo = async (item) => {
    try {
        let checkName = await getComapanyByName(item.name)
        console.log(checkName)
        if (checkName.length >= 1) {
            return fnc.resStatus(status.ERROR, alert.errorCreateDuplicateName)
        } else {
            let result = await repo.create(item)
            console.log(result);
            if (result) {
                return fnc.resData(result, status.SUCCESS, alert.successCreate)
            } else {
                return fnc.resStatus(status.ERROR, alert.errorCreate)
            }
        }
    } catch (error) {
        return fnc.resStatus(status.ERROR, alert.errorCreate)
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
            let result = await repo.findByPk(id);
            return fnc.resData(result, status.SUCCESS, alert.successEdit)
        } else {
            return fnc.resStatus(status.ERROR, alert.errorEdit)
        }
    } catch (error) {
        throw error
    }

}
let deleterepo = async (id) => {
    try {
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
            return fnc.resStatus(status.SUCCESS, alert.errorDelete)
        }
    } catch (error) {
        throw fnc.resStatus(status.ERROR, alert.successDelete)
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
        const result = await repo.findByPk(id);
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoByCondition = async (key, Condition) => {
    try {
        const result = await repo.findAll({
            where: Condition,
            attributes: key,
        });
        return result
    } catch (error) {
        throw (error)
    }

}
let getComapanyByName = async (name) => {
    try {
        const result = await repo.findAll({
            where: {
                name: name
            }
        });
        return result
    } catch (error) {
        throw (error)
    }
}
module.exports = {
    createrepo,
    updaterepo,
    deleterepo,
    getrepos,
    getrepoById,
    getrepoByCondition,
    getComapanyByName
}