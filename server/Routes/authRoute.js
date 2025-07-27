const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

router.post('/', authController.generateToken);

router.get('/', authController.accessData);

module.exports = router;
