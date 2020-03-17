var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get("/", (req,res) => {
    res.json({msg: "Hello world;"});
});

require('./app/route/customer.route.js')(app);

// Create a Server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
