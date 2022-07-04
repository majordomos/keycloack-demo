const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

const keycloakConfig = {
    clientId: 'first-client-nodejs2',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'keycloak-demo',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqZNhfqPS/+PoPsIHPYib/fCf1FIIovOTagx9LwqiZFtBTx28vIYjjmTouezg8p/HlItQE2Ile+Kh9xXZPlAwY57zFz6kLhlV6eWYu4ANtALv+IvEICYcEPZkQ86Q9K8Lh5yCLoG8ZZi//yrFQUZXZEEf+duufMXP/ygDRNSdi5pOHDuFq8loaWmLU1vcvpVKOnlH8reYyWSb+8jRm+3C3CjXZ+xlUZVaSC8dOezMw5HtOo+fWa2/JuGGz3FVY3w10MgJCXVYJByzE/nvi688zqpzk23+ffJB4yIefAgGVDDH9jvL99I7w3EBXavXsXXzC69V/1CozzIN6/YZRFAY5wIDAQAB',
    credentials: {
        secret: 'yyp5a5oHYXYMnScRApCXJGgDZ2szTo8U'
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