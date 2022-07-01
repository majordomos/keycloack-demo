const keycloak = require('../config/keycloak-config').getKeycloak();
const express = require('express');
const router = express.Router();

router.get('/anonymous', (req, res) => {
    res.send("Hello Anonymous2");
});

router.get('/check-sso', keycloak.checkSso(), (req, res) => {
    res.send('Sso checked2');
});

router.get('/user', keycloak.protect('user'), (req, res) => {
    res.send("Hello User2");
});

router.get('/admin', keycloak.protect('admin'), (req, res) => {
    res.send("Hello Admin2");
});

router.get('/all-user', keycloak.protect(['user', 'admin']), (req, res) => {
    res.send("Hello All User2");
});

module.exports = router;