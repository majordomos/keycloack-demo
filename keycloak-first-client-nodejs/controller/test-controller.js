const keycloak = require('../config/keycloak-config').getKeycloak();
const express = require('express');
const router = express.Router();

router.get('/anonymous', (req, res) => {
    res.send("Hello Anonymous");
});

router.get('/check-sso', keycloak.checkSso(), (req, res) => {
    res.send('Sso checked');
});

router.get('/user', keycloak.protect('user'), (req, res) => {
    res.send("Hello User");
});

router.get('/admin', keycloak.protect('admin'), (req, res) => {
    res.send("Hello Admin");
});

router.get('/all-user', keycloak.protect(['user', 'admin']), (req, res) => {
    res.send("Hello All User");
});

module.exports = router;