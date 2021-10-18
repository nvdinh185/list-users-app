const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/test-get', function (req, res) {
    res.send("Hello");
});

app.post('/test-post', function (req, res) {
    console.log(req.body);
    res.send("Post Ok");
});

const server = require('http').Server(app);
server.listen(8080, () => console.log("Server is starting..."));