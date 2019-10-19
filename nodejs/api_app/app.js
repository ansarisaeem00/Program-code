var restify = require('restify');
var server = restify.createServer();
const bodyParser = require("body-parser");

var user={};
var max_users_id= 0;

server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());

server.get("/", function(req,res,next){
	res.setHeader("content-type","application.jason");
	res.writeHead(200);
	res.end(JASON.stringfy(user));
	return next();

});

server.post("/user",function(res,req,next){

	var user=req.params;
	max_users_id++;
	user.id=max_users_id;
	user[user.id]=user;
	res.setHeader("content-type","application/jason");
	res.writeHead(200);
	res.end(JASON.stringfy(user));
	return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});