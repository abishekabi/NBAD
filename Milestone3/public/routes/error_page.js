const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.render('error_page.ejs', {user: null});
});

module.exports = router;