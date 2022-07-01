const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

const keycloakConfig = {
    clientId: 'first-client-nodejs',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/',
    realm: 'keycloak-demo',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAug37TOwvYOp7bM8o8gu3oUSK362U4ePhRLGI7XVdTlGsfboO2zPmo6soKuuKde4MGKShR53cvvnFegqXw4DaVNeQuRsfpX1fYrsX2f+IeFNVCPAjxxnw4mes6M4lmH4tsPMIxpgSLExfxWJvgCIxCKjRubjvTbTUP/BjYOTm8q/+zuq/n49ZgU6rvrEpk3aPGIXRdri9Hlpv9Y0lWgYgRcDnM7DiPTNfsvES2r/4HMu33G9TKk4tSXOU57eWhBP9x5BTosrGpxf/ALeqqScXIgdt4jPGa9QreSj8GZN8CFNO2j0TUsFdHZNYV7ELxHNJuAp/CKzTn3AvQ6YaokEK6QIDAQAB',
    credentials: {
        secret: 'eCxTdBb9wCzNS23nebNo5tkMSMnF37YE'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};