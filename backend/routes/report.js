const express = require('express');
const router = express.Router();

// bcryptjs package for password hashing and encryption
const bcrypt = require('bcryptjs');

const Report = require('../models/Report');

// import validators
const { body, validationResult } = require('express-validator');

// JSON Web Token to generate unique Token for user
const jwt = require('jsonwebtoken');
// Signature Key
const AUTH_KEY = "MYNameISRahul@6820";

const fetchuser = require('../middleware/fetchuser');

router.post('/save',
    // [body("username", "not a valid user name").isLength({ min: 5 }),
    // body("text", "not valid text").isLength({ min: 5 }),
    // body("userText", "not valid user text").isLength({ min: 5 }),
    // body("wpm", "not valid wpm").isLength({ min: 1, max: 200 }),
    // body("correct", "not valid correct words").isLength({ min: 5 }),
    // body("incorrect", "not valid user text").isLength({ min: 5 }),
    // body("total", "Password must be of minimum 5 length").isLength({ min: 5 })], 
    async (req, res) => {
        console.log(req.body)

        // const {username, text, userText, wpm, correct, incorrect, total} = req.body;

        const report = await Report.create(req.body)
        res.send(req.body)
    })



// Export the module
module.exports = router;