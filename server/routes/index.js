const express = require('express');

const homeRoutes = require('./homeRoutes');
const policeRoutes = require('./policeRoutes');
const userRoutes = require('./users');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/', userRoutes);
router.use('/police', policeRoutes);

module.exports = router;