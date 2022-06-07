var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', async (req, res) => {
    try {
        res.send(req.query)
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
})


module.exports = router;
