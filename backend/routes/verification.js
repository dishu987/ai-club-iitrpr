const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const router = express.Router();

router.get('/', (req, res) => {
    const jwtToken = req.cookies.token;
    if (!jwtToken) {
        res.status(401).send('Unauthorized');
    } else {
        jwt.verify(jwtToken, config.jwtSecret, function(err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized');
            } else {
                req.loginid = decoded.loginid;
                res.status(200).send(req.loginid);
            }
        });
    }
});

module.exports = router;