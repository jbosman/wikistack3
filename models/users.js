var Sequelize = require('Sequelize');
var db = require('./db');

var userSchema = {};

	userSchema.name = {
		type: Sequelize.STRING,
		allowNull: false,
	};

	userSchema.name.validate = {
		notEmpty: true,
	}

	userSchema.email = {
		type: Sequelize.STRING,
		allowNull: false,
	}

	userSchema.email.validate = {
		isEmail: true,
	}

var userOptions = {};
	userOptions.hooks = {};
	userOptions.getterMethods = {};
	userOptions.setterMethods = {};
	userOptions.classMethods = {};

var User = db.define( 'Users', userSchema, userOptions );

module.exports = User;
