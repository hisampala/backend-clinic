var express = require('express');
var route = express();
var listroute = require('express-list-routes')
const singupRouter = require('./login/singup')
const singinRouter = require('./login/singin')
const patientRouter = require('./patient')
const companyRouter = require('./company')
const branchRouter = require('./branch')
const usersRouter = require('./users')
const profileRouter = require('./profile')
const dropdownRouter = require('./dropdonw/v1')
const bookingReuter = require('./booking')
const reportReuter = require('./report')
const typebookingRouter = require('./typebooking')
const exp = require('./exp')
let authorization = require('../../../contrellers/authorization')
route.use("/singup", singupRouter)
route.use("/singin",  singinRouter)
route.use("/patient", patientRouter)
route.use("/company", companyRouter)
route.use("/branch", branchRouter)
route.use("/users", usersRouter)
route.use("/profile", profileRouter)
route.use("/dropdown", dropdownRouter)
route.use("/booking", bookingReuter)
route.use("/typebooking", typebookingRouter)
route.use("/report", reportReuter)
route.use("/", exp)

listroute(route)



module.exports = route;