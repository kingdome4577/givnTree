//============== Server Setup ======//
const express = require('express');
const app = express();


//============== DB Connection ======//
/*
* @ create DB Connection here
 */

//============== Dependency Requirements ======//
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

//============== Internal Dependency Requirements ======//
// * @ add controllers here
const authController = require('./Controllers/authController');
const orgController = require('./Controllers/orgController');
const volunteerController = require('./Controllers/volunteerContoller');
const subController = require('./Controllers/subController');
const eventController = require('./Controllers/eventController');
const slotController = require('./Controllers/slotController');
// * @ add routers here
/*
* todo: add controllers here
* todo: add routers here
 */
const volunRoutes = require(path.join(__dirname, './routs/volunRouter'));



//============== Server Setup ======//
app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




//========== Routes ==========//
app.use('/volunteer', volunRoutes);
app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



//======== Global Error Handlers ======//
app.use('*', (req, res) => {
	res.status(404).redirect('/404');
});

app.use((err, req, res, next) => {
	res.send(err);
});


//============= Start Server ==========//
app.listen(process.env.PORT || 8080);

module.exports = app;
