import makeStore from './src/store';
import Server from 'socket.io';

export const store = makeStore();

const io = new Server().attach(8090);
store.subscribe(
    () => io.emit('state', store.getState())
);

io.on('connection', (socket) => {
    console.log('user connection');
    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));
});