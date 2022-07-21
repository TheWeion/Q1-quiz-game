import io from 'socket.io-client';
//const url = `https://q1-server.herokuapp.com:8000`;
const url = `http://localhost:8000`;
export const socket = io(url);
