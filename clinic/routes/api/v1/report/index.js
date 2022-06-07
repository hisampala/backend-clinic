var express = require('express');
var router = express.Router();
var contrllerBooking = require('../../../../contrellers').bookingController
var fnc = require('../../../../fucntions')
/* GET home page. */
router.post('/booking', async (req, res) => {
    try {
        let ResulutReport = await contrllerBooking.getrepoByConditionForReport(await fnc.ganareteKeyCondition(req.body.view), await req.body.condition)
        res.send(ResulutReport)
    } catch (error) {
        res.send(error)
    }

})
router.post('/booking/datefromanddateto', async (req, res) => {
    try {
        let ResulutReport = await contrllerBooking.getrepoByConditionForReportDateFromDateto(await fnc.ganareteKeyCondition(req.body.view), await req.body.condition, await req.body.detefrom, await req.body.deteto)
        res.send(ResulutReport)
    } catch (error) {
        console.log(error);
    }

})
module.exports = router;
