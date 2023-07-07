const express = require('express');

const homeRoutes = require('./homeRoutes');
const policeRoutes = require('./policeRoutes');

const router = express.Router();

router.use('/', homeRoutes);

router.use('/police', policeRoutes);

module.exports = router;