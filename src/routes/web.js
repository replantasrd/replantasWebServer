const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('Welcome to the homepage!');
});

router.get('/services', (req, res)=>{
    res.send('Welcome to the services page!');
});

router.get('/about', (req, res)=>{
    res.send('Welcome to the about page!');
});

router.get('/contact', (req, res)=>{
    res.send('Welcome to the contact page!');
});

router.get('blog', (req,res)=>{
    res.send('Welcome to the blog page!');
});

module.exports = router;