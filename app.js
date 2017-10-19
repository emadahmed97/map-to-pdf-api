var express = require('express')
var base64 = require('node-base64-image');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})

app.post('/', function(req, res){
  console.log(req.body);
  res.send(JSON.stringify(req.body));

});

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Server listening on port ' + process.env.PORT || 3000  );
});
