const express = require('express');
const router = express.Router();

const { createUser, userLogin, userLogout } = require('../controllers/userController');

router.route('/register').post(createUser);
router.route('/login').post(userLogin);
router.route('/logout').post(userLogout);

module.exports = router;