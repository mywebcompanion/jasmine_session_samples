/**
 * Created by ARUN on 15/11/2015.
 */

var express = require('express');

var app = express();
app.get('/stocks/:symbol',function(req,res){
    res.setHeader('Content-Type','application/json');
    res.send({sharePrice : 20.18});
});
app.use(express.static(__dirname + '/public'));
app.listen(8000,function(){
    console.log("Server is listening in port 8000");
});
