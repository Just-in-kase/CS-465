var express = require('express');
var router = express.Router();
var controllers = require('../controllers/travel');

/* GET travel view */
router.get('/', controllers.travel);

module.exports = router;