"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var http_1 = require("http");
var server = http_1.default.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});
var wss = new ws_1.WebSocketServer({ server: server });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(data);
            }
        });
    });
    ws.send('Hello! Message From Server!!');
});
server.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});
