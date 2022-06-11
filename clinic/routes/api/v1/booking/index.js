var express = require('express');
var router = express.Router();
var contrller = require('../../../../contrellers').bookingController
var fnc = require('../../../../fucntions')
var enums = require('../../../../constant/enum')
/* GET home page. */
router.get('/', async (req, res) => {
    try {
        res.send(await contrller.getrepos())
    } catch (error) {
        res.end()
    }

})
router.get('/:id', async (req, res) => {
    try {
        res.send(await contrller.getrepoById(req.params.id))
    } catch (error) {
        console.log(error);
        res.end()
    }

})
router.post('/create', async (req, res) => {
    try {
        res.send(await contrller.createrepo(req.body))
    } catch (error) {
        console.log(error);
        res.end()
    }
})
router.post('/', async (req, res) => {
    try {
        res.send(await contrller.getrepoByCondition(await fnc.ganareteKeyCondition(req.body.view), await req.body.condition));
    } catch (error) {
        console.log(error);
        res.end()
    }
})
router.put('/:id', async (req, res) => {
    try {
        res.send(await contrller.updaterepo(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.end()
    }

})
router.put('/updatestatus/:id', async (req, res) => {
    try {
        res.send(await contrller.updaterepo(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.end()
    }

})
router.delete('/:id', async (req, res) => {
    try {
        res.send({ data: await contrller.deleterepo(req.params.id) });
    } catch (error) {
        console.log(error);
        res.end()
    }
})
router.get('/getByPatientIdAndBookingStatus/:id', async (req, res) => {
    try {
        res.send(await contrller.getrepoByPatientIdAndBookingStatus(req.params.id));
    } catch (error) {
        console.log(error);
        res.end()
    }
})
router.get('/getCheckBookingStatusByPatientId/:id',async(req,res)=>{
    try {
        res.send(await contrller.getrepoCheckBookingStatusByPatientId(req.params.id));  
    } catch (error) {
        console.log(error);
        res.end()
    }
})
module.exports = router;
