const express = require('express');
const router = express.Router();

const createUser = require('../controllers/userController');

router.route('/')
.get(createUser);

module.exports = router;