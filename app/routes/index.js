const express = require('express');
let router = express.Router();

// main page router
router.get('/', (req, res) => {
    // let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // res.render('index', { url: fullUrl });
    res.send('it works!');
});

module.exports = router;
