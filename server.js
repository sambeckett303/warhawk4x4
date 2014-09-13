// This is a nodejs server for running the site


var http = require("http"),
	url = require('url'), 
	path = require('path'), 
	express = require('express'),
	bodyParser = require('body-parser'), 
	port = process.env.PORT || 8888;
var app = express();

app.set('port', port);
app.use(bodyParser());
//app.use("/client", express.static(__dirname + '/client'));
app.use(express.static(path.join(__dirname, 'assets')));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get(/^(.+)$/, function(req,res) {
	res.sendfile( __dirname + req.params[0]);
});	

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port '+server.address().port);
});
