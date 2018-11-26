var express = require('express');
var bodyParser = require('body-parser');
var {router} = require('./routes/route');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

app.listen(1337, () => {
    console.log('App is listening to the port http://localhost:1337')
})