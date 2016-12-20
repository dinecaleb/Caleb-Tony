var express = require('express');
var path = require("path");
var open = require('open');

var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

app.use('/', express.static('www'));
app.use('/', router);

router.get('/:user', function(req, res){
  res.send(req.params.user);
});



app.listen(port, function(){
  console.log('Server live at http://localhost:' + port);
  open('http://localhost:' + port, function (err) {
    if (err) throw err;
    console.log('Browser opening at http://localhost:' + port);
  });
});
