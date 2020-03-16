
var express = require('express')
var cal = require('./caculator');
var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// respond with "hello world" when a GET request is made to the homepage
app.get('/calculate', function (req, res) {

    var a = req.query.a;
    var b = req.query.b;

    var result = parseInt(a) + parseInt(b);

    res.send('Kết quả a + b = ' + result);
});

app.post('/login',function (req, res) {
    var a = req.body.a;
    var b = req.body.b;

    var result = parseInt(a) + parseInt(b);
    res.send('Kết quả a + b = ' + result);

});
app.listen(8080);
