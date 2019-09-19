const express = require('express');
const router = express.Router();

router.use(require('./usersRoutes'));
router.use(require('./podcastsRoutes'));

module.exports = router;
