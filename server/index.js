var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use(express.static('./views'));

app.use('/api', require('./routes/index'));

app.get('/', function(reg, res, next){
	res.redirect('/welcome.html')
})

app.listen( 3000, function(){
	console.log( "You've been served on port 3000..." );

});