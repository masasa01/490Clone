var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

var name;
var id;
var form_fields = {name, id};
var formdata = [];

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
