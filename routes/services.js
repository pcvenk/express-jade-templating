var express = require('express');
var router = express.Router();
var fs = require('fs');

var document;
fs.readFile('../json/services.json', 'utf8', function(err, doc){
    if(err){
        throw err;
    }else{
        document = JSON.parse(doc);
    }
});

router.get('/', function(req, res){
   res.render('services', {
       title: 'Services',
       services: document
   });
});

module.exports = router;