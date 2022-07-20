import io from 'socket.io-client';

const URL = 'http://localhost:8000';
const socket = io(URL);

let mySocketId

socket.on("createNewGame", statusUpdate => {
	console.log(`Off to the Races! Username : ${statusUpdate.username} Game ID: ${statusUpdate.gameId} Socket ID: ${statusUpdate.mySocketId}`)
	mySocketId = statusUpdate.mySocketId;
})

export {
	socket,
	mySocketId
}