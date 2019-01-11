const express = require('express');
const bodyParser = require('body-parser');

const detachmentsRoute = require('./routes/detachments.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/detachments', detachmentsRoute);

let port = process.env.port || 3000;

const server = app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

module.exports = server;
