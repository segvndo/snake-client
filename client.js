//const client = require('./client')
const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
// connect();

module.exports = {connect};
