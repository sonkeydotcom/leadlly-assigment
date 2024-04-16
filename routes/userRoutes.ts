const express = require('express');
const router = express.Router();

const {
    signIn,
    signUp,
    editUser
} = require('../controllers/userController');


router.post('/signin', signIn);
router.post('/signup', signUp);
router.put('/edit', editUser);




module.exports = router;