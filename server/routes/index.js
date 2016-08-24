var apiRouter = require('express').Router();

apiRouter.get('/', function( req, res, next){
	res.send("made it to the api route!");
});

module.exports = apiRouter;