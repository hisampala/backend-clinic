var express = require('express');
var router = express.Router();
var contrller = require('../../../../contrellers').usersController
var fnc = require('../../../../fucntions')
/* GET home page. */
router.get('/', async (req, res) => {
    try {
        res.send(await contrller.getrepos())
    } catch (error) {
        res.send(error).send(error)
    }

})
router.get('/:id', async (req, res) => {
    try {
        res.send(await contrller.getrepoById(req.params.id))
    } catch (error) {
        console.log(error);
        res.send(error)
    }

})
router.post('/create', async (req, res) => {
    try {
        res.send(await contrller.createrepo(req.body))
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})
router.post('/', async (req, res) => {
    try {
        res.send(await contrller.getrepoByCondition(await fnc.ganareteKeyCondition(req.body.view), await req.body.condition));
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})
router.put('/:id', async (req, res) => {
    try {
        res.send(await contrller.updaterepo(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.send(error)
    }

})
router.delete('/:id', async (req, res) => {
    try {
        res.send({ data: await contrller.deleterepo(req.params.id) });
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})
module.exports = router;
