//const client = require('./client')
const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8"); // interpret data as text
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  conn.on("connect", () => {
    console.log('I have connected!!!');
    conn.write("Name: BM");
  });
    return conn;
};

module.exports = {connect};