import io from 'socket.io-client';
//const url = `https://api.allorigins.win/raw?url=https://q1-server.herokuapp.com:8000`;
//const url = `https://cors-anywhere.herokuapp.com/https://q1-server.herokuapp.com:8000`;
//const url = `https://q1-server.herokuapp.com:8000`;
const url = `http://localhost:8000`;
export const socket = io(url);
