const net = require('net');
const fs = require('fs');

const server = module.exports = net.createServer((socket) => {
  socket.on('data', (chunk) => {
    fs.writeFile(__dirname + '/response/' + Date.now() + '.txt', chunk, () => {
      socket.end();
      console.log('Deltron is FIN.');
    });
  });
});
server.listen(3030, () => {
  console.log('Deltron listening on 3030. \n');
});
