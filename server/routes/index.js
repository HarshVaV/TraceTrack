const express = require('express');

const homeRoutes = require('./homeRoutes');

const router = express.Router();

router.use('/', homeRoutes);

module.exports = router;