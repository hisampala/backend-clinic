const db = require('../../database');
const fnc = require('../../fucntions')
const company = require('../company')
const patient = require('../patient')
const typebooking = require('../typebooking')
let table = {
    thai_provinces: 'thai_provinces', thai_amphures: 'thai_amphures',
    thai_tambons: 'thai_tombons'
}
let getProvince = async () => {
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_provinces}`).then(function (rows) {
        result = rows
    })
    return fnc.DropdownNonConditon(result[0])
}
let getProvinceById = async (id) => {
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_provinces} where id = ${id}`).then(function (rows) {
        result = rows
    })
    if (result.length >= 1) {
        return fnc.DropdownNonConditon(result[0])
    } else {
        return result
    }

}
let getAmphures = async () => {
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_amphures}`).then(function (rows) {
        result = rows
    })
    return fnc.DropdownNonConditon(result[0])
}
let getAmphuresById = async (id) => {
    console.log(id);
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_amphures} where province_id = ${id}`).then(function (rows) {
        result = rows
    })
    if (result.length >= 1) {
        return fnc.DropdownNonConditon(result[0])
    } else {
        return result
    }
}
let getTambons = async () => {
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_tambons}`).then(function (rows) {
        result = rows
    })
    return fnc.DropdownNonConditon(result[0])
}
let getTambonsById = async (id) => {
    let result = [];
    await db.connect.query(`select *,id as value,name_th as lable from ${table.thai_tambons} where amphure_id = ${id}`).then(function (rows) {
        result = rows
    })
    if (result.length >= 1) {
        return fnc.DropdownNonConditon(result[0])
    } else {
        return result
    }
}
let getCompany = async () => {
    try {
        let result = await company.getrepos();
        if (result.length >= 1) {
            return fnc.DropdownConditon('name', result)
        } else {
            return result = []
        }
    } catch (error) {
        throw error
    }

}
let getPatient = async () => {
    let result = await patient.getrepos();
    if (result.length >= 1) {
        return fnc.DropdownTreeConditon('idCard', 'firstName','lastName', result)
    } else {
        return result = []
    }
}
let gettypebooking = async () => {
    try {
        let result = await typebooking.getrepos();
        if (result.length >= 1) {
            return fnc.DropdownTwoConditon('typename','detail', result)
        } else {
            return result = []
        }
    } catch (error) {
        throw error
    }

}
module.exports = {
    getProvince,
    getAmphures,
    getTambons,
    getProvinceById,
    getAmphuresById,
    getTambonsById,
    getCompany,
    getPatient,
    gettypebooking
}