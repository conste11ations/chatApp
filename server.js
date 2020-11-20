var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

app.use(express.static("client"));
var io = require("socket.io")(server);


  let messageArhive = [];

io.on("connection", function (socket) {
    messageArhive.map((message)=>{
      socket.send(message);
    })

  socket.on("message", function (msg) {
    messageArhive.push(msg)
    io.emit("message", msg);
  });
  
});

server.listen(8080, function () {
  console.log("Chat server running on port: 8080");
});
