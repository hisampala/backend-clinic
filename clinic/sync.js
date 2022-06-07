
const db = require("./database");

const fs = require('fs/promises');

db.connect.sync({ force: true }).then(async (item) => {
    
})


