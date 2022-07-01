const app = require('express')();
const keycloak = require('./config/keycloak-config').initKeycloak();
const testController = require('./controller/test-controller');


app.use(keycloak.middleware());

app.use('/test', testController);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Server is listening 3000!');
});