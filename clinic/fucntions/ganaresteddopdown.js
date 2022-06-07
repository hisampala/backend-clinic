
let DropdownNonConditon = async (list) => {
    let dropdown = [];
    await list.forEach(element => {
        dropdown.push({
            description: element['lable'],
            id: element['value'],
            rows: element
        })
    });
    return dropdown
}
let DropdownConditon = async (description, list) => {
    let dropdown = [];
    await list.forEach(element => {
        dropdown.push({
            description: element[description],
            id: element['id'],
            rows: element
        })
    });
    return dropdown
}
let DropdownTwoConditon = async (description1, description2, list) => {
    try {
        let dropdown = [];
        await list.forEach(element => {
            dropdown.push({
                description: '[' + element[description1] + ']' + element[description2],
                id: element['id'],
                rows: element
            })
        });
        return dropdown
    } catch (error) {
        throw error
    }

}
let DropdownTreeConditon = async (description1, description2,description3, list) => {
    try {
        let dropdown = [];
        await list.forEach(element => {
            dropdown.push({
                description: '[' + element[description1] + ']' + element[description2] + ' ' + element[description3],
                id: element['id'],
                rows: element
            })
        });
        return dropdown
    } catch (error) {
        throw error
    }

}
module.exports = {
    DropdownNonConditon, DropdownConditon, DropdownTwoConditon,
    DropdownTreeConditon
}