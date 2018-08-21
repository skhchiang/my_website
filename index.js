const express = require('express');
const path = require('path')
const app = new express();

app.use(express.static(path.join(__dirname + "/assets")));

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/index.html'))
})

<<<<<<< HEAD
=======



//helawjeflkajwelfkj

>>>>>>> 224b8c69c6d15bbcb9f252b35eb971253381c03d
app.listen(8080);




