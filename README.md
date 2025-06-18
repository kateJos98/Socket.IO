# Socket.IO Server – Node.js

Simple Socket.IO server that listens on port 3004.

## ▶️ Run locally

```bash
npm install
node server.js
```
## 🐳 Run with Docker
```bash
docker build -t katyjoseth719/socketio-server .
docker run -p 3005:3005 --name socketio-server katyjoseth719/socketio-server
```
## 📡 Test with a client
```bash
const socket = io('http://localhost:3004');
socket.on('message', msg => console.log('Server says:', msg));
socket.emit('message', 'Hello Server!');
