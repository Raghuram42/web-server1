var express=require('express');
var middleware=require('./middleware.js');
var app= express();
var port=process.env.PORT || 3000;


app.use(middleware.logger);

app.get('/aboutus',function(req,res){
   res.send("I'm cool and smart	");
});

app.get('/login',function(req,res){
   res.send("Wait it's being designing!");
});
app.use(express.static(__dirname+ '/public'));

app.listen(port,function(){
	console.log('Express server started at '+port+' port');
});