/**
	Created by: nalancer08 <https://github.com/nalancer08>
	Revision: 1.0
**/

function EndpointApp(server) {

	server.addRoute('*', '/hello/:id', this.someMethod);
	server.addRoute('*', '/status', this.status);

	//server.setDefaultRoute('/status');
}

EndpointApp.prototype.someMethod = function(request, response, obj) {

	var ret = { status: 500, message: "Error", data: [] };


	response.setHeader('Content-Type', 'application/json, charset=utf-8');
	response.setBody(JSON.stringify(ret));
	return true;
}

EndpointApp.prototype.status = function(request, response, obj) {

	var ret = { status: 200, message: "Success", data: "Everything works!" };


	response.setHeader('Content-Type', 'application/json, charset=utf-8');
	response.setBody(JSON.stringify(ret));
	return true;
}

module.exports = EndpointApp;

// class EndpointApp {

// 	// EndpointApp.prototype.init(server) {
// 	// 	console.log("COntructor works!!");
// 	// 	server.addRoute('*', '/hello', EndpointApp.someMethod);
// 	// }

// 	constructor(server) {
// 	    server.addRoute('*', '/hello', EndpointApp.someMethod);
// 	  }

//     static someMethod () {
//         console.log('Hola mundo ERICK :D');
//     }

//     static anotherMethod () {
//         console.log('Doing anotherMethod');
//     }
// }

// module.exports = EndpointApp;