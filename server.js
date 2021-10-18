const header = require('./utils/post-handler');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    // res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
    next();
});

app.use('/auth', require('./routes/user-route'));

// app.get('/test-get', (req, res) => {
//     res.send("Hello");
// });

// app.post('/test-post', header.jsonProcess, (req, res) => {
//     console.log(req.json_data);
//     res.send("Post Ok");
// });

const server = require('http').Server(app);
server.listen(8080, () => console.log("Server is starting in port 8080..."));