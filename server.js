var express=require('express');
var app= express();
var port=3000;


var middleware={
	requireAuthentication: function(req,res,next){
     console.log('Private route hit');
	next();
	},
    logger: function(req,res,next){

    	console.log(req.method+ new Date().toString());
    next();
}	
};
app.use(middleware.logger);

app.get('/aboutus',function(req,res){
   res.send("I'm cool and smart	");
});
app.use(express.static(__dirname+ '/public'));

app.listen(port,function(){
	console.log('Express server started at '+port+' port');
});