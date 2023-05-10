//const client = require('./client')
const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.on("connect", () => {
    conn.write("Name: BM");
  });
  
  conn.setEncoding("utf8"); // interpret data as text
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });
    return conn;
};

console.log("Connecting ...");
// connect();

module.exports = {connect};