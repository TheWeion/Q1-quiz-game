import React, { useEffect, useState } from 'react';
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

    const [player1Ready, setPlayer1Ready] = useState(false);
    const [player2Ready, setPlayer2Ready] = useState(false);
    const [player3Ready, setPlayer3Ready] = useState(false);
    const [player4Ready, setPlayer4Ready] = useState(false);

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
                    let player1 = res.data[0];
                    if (player1.is_ready) {
                        dispatch(updatePlayer(player1));
                        setPlayer1Ready(true);
                    }
                    let player2 = res.data[1];
                    if (player2.is_ready) {
                        dispatch(updatePlayer(player2));
                        setPlayer2Ready(true);
                    }
                    let player3 = res.data[2];
                    if (player3.is_ready) {
                        dispatch(updatePlayer(player3));
                        setPlayer3Ready(true);
                    }
                    let player4 = res.data[3];
                    if (player4.is_ready) {
                        dispatch(updatePlayer(player4));
                        setPlayer4Ready(true);
                    }
                }
            });
            socket.on('playerReady', (res)=>{
                const div = document.getElementById("messageFromServer");
                if (div !== undefined && div !== null) {
                    div.innerHTML = DOMPurify.sanitize(res.msg);
                }
            });
            socket.on('getQuestions', (res)=>{
                console.log(res);
                dispatch(setQuestions(res.data));
            });
        }
    }, [socket]);

    useEffect(()=>{
        if (infos.multiPlay) {
            if (player1Ready, player2Ready, player3Ready, player4Ready) {
                socket.emit('getQuestions', {"roomId": infos.roomId});
                wait(3).then(()=>{
                    navigate('/game');
                });
            }
        }
    }, [player1Ready, player2Ready, player3Ready, player4Ready]);

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