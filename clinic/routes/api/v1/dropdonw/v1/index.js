var express = require('express');
var router = express.Router();
var contrller = require('../../../../../contrellers').dropdownController
var fnc = require('../../../../../fucntions')
/* GET home page. */
router.get('/province', async (req, res) => {
    try {
        let result = await contrller.getProvince();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/province/:id', async (req, res) => {
    try {
        let result = await contrller.getProvinceyId(req.params.id);
        res.send(result)
    } catch (error) {
        res.sendStatus(400); 
        console.log(error) 
    }

})
router.get('/amphures', async (req, res) => {
    try {
        let result = await contrller.getAmphures();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 

    }

})
router.get('/amphures/:id', async (req, res) => {
    try {
        let result = await contrller.getAmphuresById(req.params.id);
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/tambons', async (req, res) => {
    try {
        let result = await contrller.getTambons();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/tambons/:id', async (req, res) => {
    try {
        let result = await contrller.getTambonsById(req.params.id);
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/company', async (req, res) => {
    try {
        let result = await contrller.getCompany();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/patient', async (req, res) => {
    try {
        let result = await contrller.getPatient();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
router.get('/typebooking', async (req, res) => {
    try {
        let result = await contrller.gettypebooking();
        res.send(result)
    } catch (error) {
        res.sendStatus(400);
        console.log(error) 
    }

})
module.exports = router;
