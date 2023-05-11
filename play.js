const {connect} = require('./client');
//const connection = connect();
//console.log(connect);
// connection.on('connect', function() {
// });
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};
setupInput();