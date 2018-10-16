const express = require('express');

let mainRouter = express.Router();

mainRouter.get('/', function(req, res){
    let message = {'greeting': 'Hello, welcome to MyPage!'};
    res.json(message);
});

module.exports = mainRouter;