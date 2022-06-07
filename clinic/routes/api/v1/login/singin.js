var express = require('express');
var router = express.Router();
var contrller = require('../../../../contrellers').singinController
var fnc = require('../../../../fucntions')
var status = require('../../../../constant/status').status
/* GET home page. */
router.post('/', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let users = await contrller.singin(username, password)
        res.send(users)
    } catch (error) {
        console.log(error);
        res.end()
    }

})
router.post('/checkclientlogin', async (req, res) => {
    try {
        if (!fnc.isNullOrundefined(req.body)) {
            if (!fnc.isNullOrundefined(req.body.session)) {
                let islogin = await contrller.checkclientlogin(req.body.session);
                let accessionNavigatePage = await contrller.checkIsNavigate(req.body.session)
                res.send( await fnc.resData(islogin, status.SUCCESS, ""))
            } else {
                res.send(await fnc.resData(false, status.ERROR, ""))
            }
        } else {
            res.send(await fnc.resData(false, status.ERROR, ""))
        }
    } catch (error) {
        res.send(await fnc.resData(false, status.ERROR, ""))
        console.log(error);

    }

})

module.exports = router;
