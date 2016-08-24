var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://user:pass@example.com:5432/wikistack');
var User = require('./users');



module.exports = db;