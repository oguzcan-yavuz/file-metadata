const express = require('express');
const multer = require('multer');
const metadata = require('../api/metadata');
let router = express.Router();
let upload = multer();

// main page router
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/upload', upload.single('givenFile'), async (req, res) => {
    let givenFile = req.file;
    let result = await metadata(givenFile);
    res.json(result);
});

module.exports = router;
