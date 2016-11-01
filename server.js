var express = require("express");
var app = express();

app.use(express.static("content"));
app.set('views', './src/views');
app.set('view engine', 'jade');


app.get('/', function (request, response) {
    response.render('index')
})

app.listen(3001, "127.0.0.1" ,function () {
    console.log("application up and running on server port 3001");
});