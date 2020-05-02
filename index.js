//jshint esversion:6
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(req,res){
res.sendFile(__dirname + '/index.html');
});
app.get('/app.js', function(req,res){
    res.sendFile(__dirname + '/app.js');
});
app.listen(3000, function(){
console.log('app is running at port 3000');
});