let repo = require('../../database').bookingdetail
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let sequelize = require('../../database')
const Sequelize = require('sequelize');
const db = require('../../database');
let moment = require('moment')
moment.tz('Asia/Bangkok')
const table = {
    bookingdetail: 'bookingdetails'
}
let createrepo = async (item) => {
    try {
        let result = await repo.create(item)
        if (result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
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
        console.log(result);
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoByCondition = async (key, Condition) => {
    try {
        console.log(key, Condition);
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
let getLasterQueue = async (companyId, date) => {
    try {
        let bookingdetail = []
        await db.connect.query(`select id,datebooking,queue from ${table.bookingdetail} where datebooking like  '%${moment(date).format("YYYY-MM-DD").toString()}%' order by createdAt desc limit 1 `).then(function (rows) {
            console.log(rows);
            bookingdetail = rows[0]
        })
        if (bookingdetail.length > 0) {
            let qtemp = bookingdetail[0].queue
            let temp = Number(qtemp.slice(-1));
            temp++
            console.log(temp);
            let q = '00' + temp
            return q.toString();
        } else {
            let q = '001'
            return q
        }
    } catch (error) {
        console.log(error);
        throw error
    }

}
module.exports = {
    createrepo,
    updaterepo,
    deleterepo,
    getrepos,
    getrepoById,
    getrepoByCondition,
    getLasterQueue
}