// require technologies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');


// 27017 is default mongo port
mongoose.connect('localhost:/27017/test');
var ourSchema = new mongoose.Schema({
    name: String,
    location: String
});

var ourModel = mongoose.model('ourModel', ourSchema);

// base url
app.get('/', function(req, res) {
    console.log('base hit');
    res.sendFile(path.resolve('public/index.html'));
});
app.get('/getRecords', function(req, res) {
    // get and send back all the things
    ourModel.find({}, function(err, response) {
      if(err) {
        res.sendStatus(500);
        console.log('error in find');
      } else {
        res.send(response);
      }
    });
});
app.listen(8080, 'localhost', function(req, res) {
    console.log('listening on 8080');
});
app.post('/testPost', function(req, res) {
    console.log('req.body.name: ' + req.body.name);
    // retrieved the req.body
    // putting it into an object to be saved in the db
    var recordToAdd = {
            name: req.body.name,
            location: req.body.location
        };

        // create new record
    var newRecord = ourModel(recordToAdd);
    newRecord.save();
});
app.use(express.static('public'));
