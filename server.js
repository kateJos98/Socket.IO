const { Server } = require('socket.io');
const http = require('http');

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' } // Permitir cualquier origen (para desarrollo)
});

io.on('connection', socket => {
  console.log('✅ Client connected:', socket.id);

  socket.emit('message', 'Connected to Socket.IO');

  socket.on('message', msg => {
    console.log('Received:', msg.toString());
    socket.emit('message', `Server received: ${msg.toString()}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => console.log(`Hello from Socket.IO listener on port ${PORT}`));
