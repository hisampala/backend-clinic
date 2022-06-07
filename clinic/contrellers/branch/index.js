let repo = require('../../database').branch
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let createrepo = async (item) => {
    try {
        console.log(item);
        let result = await repo.create(item)
        console.log(result)
        return fnc.resData(result, status.SUCCESS, alert.successCreate)
    } catch (error) {
        throw   fnc.resStatus(status.ERROR, alert.errorCreate)
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
            return fnc.resData(result, status.SUCCESS, alert.successCreate)
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
    return result
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
        console.log(result);
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoByCondition = async (key, Condition) => {
    try {
        console.log(key,Condition);
        const result = await repo.findAll({
            where: Condition,
            attributes: key
        });
        console.log(result);
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
    getrepoByCondition
}