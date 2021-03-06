var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

var nsp = io.of("/my-namespace");
nsp.on("connection", function (socket) {
  console.log("Someone connected");
  nsp.emit("hi", "Hello everyone!");
});

http.listen(3000, function () {
  console.log("listening on localhost:3000");
});
