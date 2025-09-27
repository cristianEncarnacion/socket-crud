import app from './app.js';
import { Server as websocketserver } from 'socket.io';
import http from 'http';
import {connectDB} from './db.js';
import sockets from './socket.js';


connectDB()

const server=http.createServer(app)
const io=new websocketserver(server)

sockets(io)

server.listen(process.env.PORT || 3000)

console.log(`Server is running on port ${process.env.PORT || 3000}`);