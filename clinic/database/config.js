module.exports = {
    HOST: "eyvqcfxf5reja3nv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "yvrnqjyjcikm3blr",
    PASSWORD: "zyp0qkdkkklyav3e",
    DB: "ri4gs0nkcjqcv9ee",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false, // very important
        }
    }
}
// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "orm",
//     dialect: "mysql",
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// }