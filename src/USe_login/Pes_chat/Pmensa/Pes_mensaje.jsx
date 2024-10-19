const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Debe ser { Server } en lugar de { server }
const app = express();
const server = http.createServer(app);
const io = new Server(server); // Cambiar aquí también

io.on('connection', (socket) => { // No importes Socket desde socket.io-client
  console.log('A user connected');

  socket.on('message', (msg) => {
    io.emit('message', msg); // Emitir el mensaje a todos los clientes
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
