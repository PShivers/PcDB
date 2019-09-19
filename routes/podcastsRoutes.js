const express = require('express');
const router = express.Router();
const podcastsController = require('../controllers/podcastsController.js');

router.get('/popularpodcasts', podcastsController.indexPopular);
router.post('/podcasts', podcastsController.create);

router.get('/podcasts/:id', podcastsController.show);
router.put('/podcasts/:id', podcastsController.update);
router.delete('/podcasts/:id', podcastsController.delete);

module.exports = router;
