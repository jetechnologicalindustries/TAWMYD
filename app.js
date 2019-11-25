const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const tynt = require('tynt');
const moment = require('moment');
const fs = require('fs');
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: '.jets'
});
const port = process.env.PORT || 1108;
const version = "1.0.0.1";

//db start
// const couch = new NodeCouchDB({
// 	auth: {
// 		user: 'admin',
// 		password: 'admin'
// 	}
// });

// const dbName = 'jregistration';
// const viewUrl = '_design/all_members/_view/all';

// console.log('Checking database connection...')
// couch.listDatabases().then(function(dbs){
// 	console.log(dbs);
// 	console.log('Database connection successful.');
// });
//db end

const app = express();

//timestamper
function timeStamp(color, text){
	let x = color;
	let y;
	if (x==='Red') {
		y = ` : ${tynt.Red(text)}`;
	} else	{
		if (x==='Green') {
			y = ` : ${tynt.Green(text)}`;
		}
	};
	console.log(`${tynt.Yellow(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}` + y);
};

//
app.use(express.static(path.join(__dirname, '/public')));

// Init middleware
app.use('/', logger);


// Handlebars Middleware
app.engine('.jets', hbs.engine);
app.set('view engine', '.jets');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/favicon.ico', (req, res) => res.status(204));
//homepage route
app.get('/', function(req,res){
	res.render('index', { 
		alertMsg: undefined,
		title: 'T A W M Y D',
		titleurl: '/',
		navtitle: 'TAWMYD',
		link1: 1,
		link1url: '/',
  		link1name: 'Home',
  		link8: 1,
		link8url: '/jetservices',
		link8name: 'JET Services'
	});
});

//jetservices route
app.get('/jetservices', function(req,res){
	res.render('jetservices', { 
		alertMsg: undefined,
		title: 'JET Services',
		titleurl: '/jetservices',
		navtitle: 'JET Services',
		link1: 1,
		link1url: '/',
  		link1name: 'TAWMYD',
  		jets: true
	});
});

function serverStart() {
	app.listen(port, function(){
		console.log(`${tynt.Yellow('        ____.______________________                           .__                     ')}`);
		console.log(`${tynt.Yellow('        |    |\\_   _____/\\__    ___/   ______ ______________  _|__| ____  ____   ______')}`);
		console.log(`${tynt.Yellow('        |    | |    __)_   |    |     /  ___// __ \\_  __ \\  \\/ /  |/ ___\\/ __ \\ /  ___/')}`);
		console.log(`${tynt.Yellow('    /\\__|    | |        \\  |    |     \\___ \\\\  ___/|  | \\/\\   /|  \\  \\__\\  ___/ \\___ \\ ')}`);
		console.log(`${tynt.Yellow('    \\________|/_______  /  |____|    /____  >\\___  >__|    \\_/ |__|\\___  >___  >____  >')}`);
		console.log(`${tynt.Yellow('                      \\/                  \\/     \\/                    \\/    \\/     \\/ ')}`);
		console.log(`${tynt.Yellow('  _________                                 __________                    .__                ')}`);
		console.log(`${tynt.Yellow(' /   _____/ ______________  __ ___________  \\______   \\__ __  ____   ____ |__| ____    ____  ')}`);
		console.log(`${tynt.Yellow(' \\_____  \\_/ __ \\_  __ \\  \\/ // __ \\_  __ \\  |       _/  |  \\/    \\ /    \\|  |/    \\  / ___\\ ')}`);
		console.log(`${tynt.Yellow(' /        \\  ___/|  | \\/\\   /\\  ___/|  | \\/  |    |   \\  |  /   |  \\   |  \\  |   |  \\/ /_/  >')}`);
		console.log(`${tynt.Yellow('/_______  /\\___  >__|    \\_/  \\___  >__|     |____|_  /____/|___|  /___|  /__|___|  /\\___  / ')}`);
		console.log(`${tynt.Yellow('        \\/     \\/                 \\/                \\/           \\/     \\/        \\//_____/  ')}`);
		console.log(`${tynt.Yellow(' ==================================== TAWMYD v. '+ version +' ====================================')}`);
		console.log(`${tynt.Yellow(' ================================ Server running on '+ port +' ===================================')}`);
	}); 
};

setTimeout(serverStart, 1000);