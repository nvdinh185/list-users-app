const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());

const publicPath = path.join(__dirname, "client");
app.use(express.static(__dirname + '/client'));

app.use('/auth', require('./routes/user-route'));

app.get('/signup', function (req, res) {
    res.sendFile(path.join(publicPath, 'signup.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(publicPath, 'login.html'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is starting on port ${port}...`));