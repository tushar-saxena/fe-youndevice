var express = require('express');
var open = require('open');
var app = express();

/************************************************************
 *
 * Express routes for:
 *   - app.js
 *   - style.css
 *   - index.html
 *
 *   Sample endpoints to demo async data fetching:
 *     - POST /landing
 *     - POST /home
 *
 ************************************************************/

// Serve application file depending on environment
app.get('/bundle.js', function (req, res) {
	if (process.env.NODE_ENV == "production") {
		res.sendFile(__dirname + '/build/bundle.js');
	} else {
		res.redirect('//localhost:9090/build/bundle.js');
	}
});
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next()
});
app.get('/style.css', function (req, res) {
	if (process.env.NODE_ENV == "production") {
		res.sendFile(__dirname + '/build/style.css');
	} else {
		res.redirect('//localhost:9090/build/style.css');
	}
});

app.use(express.static(__dirname + '/build'));

// Serve index page
app.get('*', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.post('/landing', function (req, res) {
	res.json({
		title: "Landing Page"
	});
});

app.post('/home', function (req, res) {
	res.json({
		title: "Home Page"
	});
});


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (process.env.NODE_ENV != "production") {
	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');
	var config = require('./webpack.local.config');

	new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		noInfo: true,
		historyApiFallback: true
	}).listen(9090, 'localhost', function (err, result) {
				console.log(">Rn on 9090")
				if (err) {
					console.log(err);
				}
			});
}

/******************
 *
 * Express server
 *
 *****************/

var port = process.env.PORT || 8000;
// var server = app.listen(port, function () {
//   var host = server.address().address || 'localhost';
//   var port = server.address().port;

//   console.log('Essential React listening at http://%s:%s', host, port);
// });

var server = app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Example app listening on port!',port);
	}
});
