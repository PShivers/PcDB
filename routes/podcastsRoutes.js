const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

router.get('/users', usersController.index);
router.post('/users', usersController.create);

router.get('/users/:id', usersController.show);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

module.exports = router;

