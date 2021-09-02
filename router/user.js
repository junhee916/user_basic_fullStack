const express = require('express')
const router = express.Router()

const {
    users_login,
    users_signup
} = require('../controller/user')

// signup 
router.post('/signup', users_signup)

// login
router.post('/login', users_login)

module.exports = router