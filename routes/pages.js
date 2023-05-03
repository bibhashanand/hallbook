const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/booking', (req, res) => {
    res.render('booking');
});

router.get('/halls', (req, res) => {
    res.render('halls');
});


module.exports = router;