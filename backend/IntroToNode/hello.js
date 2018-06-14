// for (var i=0; i<10; i++){
// 	console.log("Hello from hello.js");
// }

const http = require('http');

http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write('Hello world!');
	response.end();
}).listen(1337);
