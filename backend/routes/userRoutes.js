// backend/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Test Route
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        let user = new User({
            name: req.body.name,
            email: req.body.mail,
            password: req.body.pswd,
        });

        const doc = await user.save();
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Failed to signup user' });
    }
});

module.exports = router;
