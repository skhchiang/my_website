const express = require('express');
const app = new express();

app.get('/', function(req, res){
res.sendFile('index.html')
})

app.listen(8080);




