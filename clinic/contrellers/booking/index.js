let repo = require('../../database').booking
let patient = require('../../database').patient
let bookingdetail = require('../bookingdetail')
let repobookingdetail = require('../../database').bookingdetail
let alert = require('../../constant/alert')
let fnc = require('../../fucntions')
let status = require('../../constant/status').status
let sequelize = require('../../database')
const Sequelize = require('sequelize');
const { uuid } = require('uuidv4');
let moment = require('moment')
moment.tz('Asia/Bangkok')
let createrepo = async (item) => {
    let transaction = await sequelize.connect.transaction();
    try {
        let objBooking = {
            companyId: item.companyId,
            userId: item.userId,
            patientId: item.patientId,
            detail: item.detail,
            bookingcode: uuid()
        }
        let result = await repo.create(objBooking)
        let objBookingDetail = {
            companyId: item.companyId,
            datebooking: `${moment(item.datebooking).format("YYYY-MM-DD")}`,
            queue: await bookingdetail.getLasterQueue(objBooking.companyId, item.datebooking),
            bookingId: result.id
        }
        let retsult = await bookingdetail.createrepo(objBookingDetail)
        if (retsult) {
            transaction.commit()
            return fnc.resData(result, status.SUCCESS, alert.successCreate)
        } else {
            transaction.rollback()
        }
    } catch (error) {
        if (error) transaction.rollback()
        return fnc.resData(error, status.ERROR, alert.errorCreate)
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
        let result = await repo.findAll({
            include: [repobookingdetail]
        })
        return result
    } catch (error) {
        throw (error)
    }

}
let getrepoById = async (id) => {
    try {
        const result = await repo.findByPk(id, {
            include: [
                repobookingdetail
                , patient]
        });
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
            attributes: key,
            include: [{
                model: repobookingdetail,
                where: {
                    datebooking: Sequelize.fn('CURRENT_DATE')
                }
            },
                patient],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return await ganaretedBookingAndBookingDetail(result)
    } catch (error) {
        throw (error)
    }

}
let getrepoByConditionForReport = async (key, Condition) => {
    try {
        const result = await repo.findAll({
            where: Condition,
            attributes: key,
            include: [{
                model: repobookingdetail
            }, patient],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return await ganaretedBookingAndBookingDetail(result)
    } catch (error) {
        throw (error)
    }

}
let getrepoByConditionForReportDateFromDateto = async (key, Condition, datefrom, dateto) => {
    let Op = Sequelize.Op;
    try {
        const result = await repo.findAll({
            where: Condition,
            attributes: key,
            include: [{
                model: repobookingdetail,
                where: {
                    datebooking: { [Op.between]: [datefrom, dateto] }
                }
            }, patient],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return await ganaretedBookingAndBookingDetail(result)
    } catch (error) {
        throw (error)
    }

}
let ganaretedBookingAndBookingDetail = async (list) => {
    try {
        let allBooking = []
        if (fnc.isNullOrundefined(list)) {
            return allBooking
        }

        await list.forEach(element => {
            let Booking = {
                queue: element.bookingdetail.queue,
                bookingcode: element.bookingcode.slice(0, 7),
                firstName: element.patient.firstName,
                lastName: element.patient.lastName,
                bookingstatus: element.bookingstatus,
                datebooking: element.bookingdetail.datebooking,
                createdAt: element.createdAt,
                id: element.id
            }
            allBooking.push(Booking)
        });
        return allBooking
    } catch (error) {
        throw erorr
    }

}

module.exports = {
    createrepo,
    updaterepo,
    deleterepo,
    getrepos,
    getrepoById,
    getrepoByCondition,
    getrepoByConditionForReport,
    getrepoByConditionForReportDateFromDateto
}