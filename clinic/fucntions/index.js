let sha256 = require('sha256');
let { DropdownNonConditon, DropdownConditon, DropdownTwoConditon,DropdownTreeConditon } = require('./ganaresteddopdown')
const ganareteKeyCondition = async (item) => {
    //การสร้าง Attibute
    let condition = await []
    await item.forEach(async (element) => {
        console.log(element.related);
        if (!element.related) {
            condition.push("" + element.key)     
        }
    });
    return condition
}

let ganaretepassword = (pass) => {
    let lavel1 = sha256(pass, { asString: true });
    let lavel2 = sha256(lavel1, { asString: true });
    let lavel3 = sha256(lavel2, { asString: true });
    let lavel4 = sha256(lavel3, { asString: true });
    let lavel5 = sha256(lavel4, { asString: true });
    return lavel5
}
let resData = async (data, status, msg) => {
    let result = {
        data: data,
        status: status,
        msg: msg
    }
    return result
}
let resStatus = async (status, msg) => {
    let result = {
        status: status,
        msg: msg
    }
    return result
}
let isNullOrundefined = (obj) => {
    if ((obj === null || obj === undefined || obj === '')) {
        return true
    } else {
        return false
    }
}
let encodedData = async (item) => {
    let encode = await btoa(item).toString();
    return encode
}
let decodedData = async (item) => {
    let decode = await atob(item)
    return decode
}
module.exports = {
    ganareteKeyCondition,
    ganaretepassword,
    resData,
    resStatus,
    DropdownNonConditon, DropdownConditon, DropdownTwoConditon,DropdownTreeConditon,
    isNullOrundefined,
    encodedData,
    decodedData
}