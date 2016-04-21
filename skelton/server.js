const net = require('net');
const fs = require('fs');

const server = module.exports = net.createServer((socket) => {
  socket.on('data', (chunk) => {
    fs.writeFile(__dirname + '/response/' + Date.now() + '.txt', chunk, () => {
    });
    socket.write('FIN');
    socket.end('\n');
  });
});
server.listen(3030, () => {
  console.log('listening on 3030. \n');
});
