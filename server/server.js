import makeStore from './src/store';
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIO().attach(server);
server.listen(process.env.PORT || 8000);

export const store = makeStore();

store.subscribe(
    () => io.emit('state', store.getState())
);

io.on('connection', (socket) => {
    console.log('user connection');
    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));
});