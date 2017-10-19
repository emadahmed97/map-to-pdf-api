var express = require('express')
var base64 = require('node-base64-image');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})

app.post('/', function(req, res){
  console.log('hit upload');
  console.log(req.body);
  const url = req.data.tiles;
  var base64Image = new Buffer(url, 'binary').toString('base64')
  var result = 'data:image/jpeg;base64,' + base64Image
  res.json(result);
}

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Server listening on port ' + process.env.PORT || 3000  );
});
