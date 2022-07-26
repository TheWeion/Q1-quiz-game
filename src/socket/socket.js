import io from 'socket.io-client';
const url = `https://q1-server.herokuapp.com`;
//const url = `http://localhost:8000`;
export const socket = io(url);
