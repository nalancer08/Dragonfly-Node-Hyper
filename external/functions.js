/**
	Version 3.0
	Created by: nalancer08 <https://github.com/nalancer08>
	Revised by: nalancer08 <https://github.com/nalancer08>
**/

function Functions(server) {

	// Adding endpoints
	EndpointApp = require('./endpoint/app.endpoint.js');

	// Adding models
	// --

	// Creating endpoints array
	this.endpoints = [];
	this.endpoints['EndpointApp'] = new EndpointApp(server);

	this.models = [];

}

module.exports = Functions;