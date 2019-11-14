

var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
var db = require('./database');
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

var name;
var location;
var time;
var subject;
var form_fields = {name, location, time, subject};
var formdata = [];

router.get("/get", (request, response) => {
  var output = formdata.pop();
  return response.json({ output });
});

router.post('/post', (request, response) => {
  name=request.body.name;
  location=request.body.location;
  time=request.body.time;
  subject=request.body.subject;

  db.conn(function(err,dbo){
    if(err){
      response.sendStatus(500);
      console.log("My guy, you got to connect to the database first");
    }


  return response.json({ success: "We Posted" });
});

router.get("/get", (request, response) => {
  var output = formdata.pop();
  return response.json({ output });
});

router.post('/post', (request, response) => {
  form_fields.name = request.body.name;
  form_fields.id = request.body.id;
  formdata.push(form_fields);

  return response.json({ success: "We Posted" });
});


app.use('/api', router);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
})
