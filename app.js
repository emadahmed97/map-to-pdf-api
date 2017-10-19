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
  const util=require('util');let s=util.inspect(req.body)
  .split(`Content-Disposition: form-data; name`);s.splice(0,1);
  let r=`{"`;s.forEach((e)=>{r+=e.split(`\\r\\n------`)[0]
  .replace(`"\\r\\n\\r\\n`,`":"`).replace(`\': \'"`,``)
  .replace(`=`,``)+`",`});s=r.slice(0,-1)+`}`;console.log(s);
  const url = req.body.tiles;
  var base64Image = new Buffer(url, 'binary').toString('base64');
  var result = 'data:image/jpeg;base64,' + base64Image;
  res.status(200).send(result)

});

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Server listening on port ' + process.env.PORT || 3000  );
});
