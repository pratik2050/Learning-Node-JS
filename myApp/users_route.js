const express = require('express');
const router = express.Router();

router.use((req,res, next) => {
    console.log('in middle');
    next();
})

router.get('/', (req, res) => {
    res.send('Main Page');
})

router.get('/info', (req, res) => {
    res.send('info Page');
})

module.exports = router;