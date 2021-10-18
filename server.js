const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/www'));

app.get('/test-get', function (req, res) {
    res.send("Hello");
});

const server = require('http').Server(app);
server.listen(8080, () => console.log("Server is starting..."));