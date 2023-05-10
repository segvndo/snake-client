const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
//When client finally connects:
// client.on('connect', function() {
//   client.write('I have connected!!!');
// })

console.log("Connecting ...");
connect();