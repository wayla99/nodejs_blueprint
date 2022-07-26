const express = require('express');
const config = require('../config/config')
const app = require('./user/init')

const router = express.Router();

router.get(config.BasePath + 'user', app.List);
router.post(config.BasePath + 'user', app.Create);
router.get(config.BasePath + 'user/:id', app.Read);
router.delete(config.BasePath + 'user/:id', app.Delete);
router.put(config.BasePath + 'user/:id', app.Update);


module.exports = router;