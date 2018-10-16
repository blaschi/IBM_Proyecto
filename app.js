const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/main');

const port = 3000;
const host = "127.0.0.1";

let app = express();

app.use(express());
app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

app.use(mainRouter);

//Error Handler
app.use(function(error, req, res, next){
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    res.status(error.status || 500);
    res.send(error);
});

app.get('*', function(req, res) {
    res.send('ERROR 404: Not found');
});

app.listen(port, host, function() {
    console.log("Server running on " + host + ":" + port);
});