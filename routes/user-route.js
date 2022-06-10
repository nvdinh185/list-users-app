const router = require('express').Router();

const postHandler = require('../utils/post-handler');

const userHandler = require('../handlers/user-handler');
const tokenHandler = require('../handlers/token-handler');

router.post('/create-user'
    , postHandler.jsonProcess       //req.json_data
    , userHandler.createUser
);

router.post('/login-user'
    , postHandler.jsonProcess       //req.json_data
    , tokenHandler.requestNewToken
    , userHandler.loginUser
);

router.get('/get-users'
    , tokenHandler.getToken
    , tokenHandler.verify
    , userHandler.getUsers
);

module.exports = router;