import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setQuestions, updatePlayer } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';
import { socket } from '../../socket/socket.js';
import Button from 'react-bootstrap/Button';
//import './styles.css';

const WaitingRoom = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
	
	const players = useSelector(state => state.playersReducer);
    const infos = useSelector(state => state.infoReducer);

    useEffect(()=>{
        if (infos.multiPlay) {
            socket.on('joinRoom', (res)=>{
                const div = document.getElementById("messageFromServer");
                if (div !== undefined && div !== null) {
                    div.innerHTML = DOMPurify.sanitize(res.msg);
                }
            });
            socket.on('updatePlayer', (res)=>{
                const div = document.getElementById("messageFromServer");
                if (div !== undefined && div !== null) {
                    div.innerHTML = DOMPurify.sanitize(res.msg);
                }
                if (res.status === 'OK') {
                    let numberOfPlayers = res.data.length;
                    for (let ind = 0; ind < numberOfPlayers; ind++) {
                        let curplayer = res.data[ind];
                        dispatch(updatePlayer(curplayer));
                    }
                }
            });
            socket.on('playerReady', (res)=>{
                if (res.status === 'OK') {
                    const div = document.getElementById("messageFromServer");
                    if (div !== undefined && div !== null) {
                        div.innerHTML = DOMPurify.sanitize(res.msg);
                    }
                    checkAllReady();
                }
            });
            socket.on('getQuestions', (res)=>{
                dispatch(setQuestions(res.data));
            });
        }
    }, [socket]);

    const checkAllReady = () => {
        if (players.length > 1) {
            let readyCount = 0;
            players.map((cur)=>{
                if (cur.is_ready) {
                    readyCount++;
                }
            });
            if (readyCount === players.length) {
                socket.emit('getQuestions', {"roomId": infos.roomId});
                wait(3).then(()=>{
                    navigate('/game');
                });
            }
        }
    };

    const handleReady = () => {
        if (infos.multiPlay) {
            let curPlayer = players[infos.playerId];
            curPlayer.is_ready = true;
            dispatch(updatePlayer(curPlayer));
            socket.emit('updatePlayer', {roomId: infos.roomId, playerId: infos.playerId, player: curPlayer});
            socket.emit('playerReady', {roomId: infos.roomId, playerId: infos.playerId});
        }
    };

    const wait = async(second) => {
        return new Promise(resolve => setTimeout(resolve, second*1000));
    };

	return (
		<>
			<h1 className='leaderBoard'>Prepare your car</h1>
            Please wait for bit
            <div className='card card-body'>
                <div id="messageFromServer"></div>
            </div>
            <Button id="ready" onClick={handleReady}>I'm ready</Button>
		</>
	);
}

export default WaitingRoom;