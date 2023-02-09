var udp = require("dgram");

// -------------------- udp client ----------------

var buffer = require("buffer");

// creating a client socket
var client = udp.createSocket("udp4");

//buffer msg
var data = Buffer.from("Antony Munyao");

client.on("message", function (msg, info) {
  console.log("Reply received from server : " + msg.toString());
  console.log(
    "Received %d bytes from %s:%d\n",
    msg.length,
    info.address,
    info.port
  );
});

//sending msg
client.send(data, 17017, "0.tcp.in.ngrok.io", function (error) {
  if (error) {
    client.close();
  } else {
    console.log("Data sent, waiting for a reply...");
  }
});