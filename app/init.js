const express = require('express');
const config = require('../config/config')
const app = require('./company/init')
const client = require('./staff/init')

const router = express.Router();

router.get(config.BasePath + 'company', app.List);
router.post(config.BasePath + 'company', app.Create);
router.get(config.BasePath + 'company/:id', app.Read);
router.delete(config.BasePath + 'company/:id', app.Delete);
router.put(config.BasePath + 'company/:id', app.Update);

router.get(config.BasePath + 'staff', client.All);

module.exports = router;
