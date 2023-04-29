const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('./pages/index')
});

router.get('/shop', (req, res)=>{
    res.render('./pages/shop')
});

router.get('/about', (req, res)=>{
    res.render('./pages/about')
});

router.get('/contact', (req, res)=>{
    res.render('./pages/contact')
});

router.get('/portfolio', (req, res)=>{
    res.render('./pages/portfolio')
});

router.get('/blog', (req,res)=>{
    res.render('./pages/blog')
});

module.exports = router;