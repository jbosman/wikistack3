var Sequelize = require('Sequelize');
var db = require('./db');

var pageSchema = {};

	pageSchema.name = {
		type: Sequelize.STRING,
		allowNull: false,
	};

	pageSchema.name.validate = {
		notEmpty: true,
	}

	pageSchema.email = {
		type: Sequelize.STRING,
		allowNull: false,
	}

	pageSchema.email.validate = {
		isEmail: true,
	}

var pageOptions = {};
	pageOptions.hooks = {};
	pageOptions.getterMethods = {};
	pageOptions.setterMethods = {};
	pageOptions.classMethods = {};

var Pages = db.define( '', userSchema, userOptions );

module.exports = User;