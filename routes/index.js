const express = require('express');
const { createIndexes } = require('../models/user');

const router = express.Router();

router.use('/user',require('./user'));
module.exports = router;