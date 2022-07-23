import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './style.css'
import { socket } from '../../socket/socket.js';
import Timer from '../Timer';

const Podium = () => {
    const infos = useSelector(state => state.infoReducer);
    const playerFromReducer = useSelector(state => state.playersReducer);
    const [players, setPlayers] = useState([]);

    socket.emit('getPlayers', {roomId: infos.roomId});

    useEffect(()=>{
        if (infos.multiPlay) {
            socket.on('getPlayers', (res)=>{
                if (res.status === 'OK') {
                    setPlayers(sortByTime(res.data));
                }
            });
        } else {
            setPlayers(sortByTime(playerFromReducer));
        }
    }, [socket]);

    const sortByTime = (array) => {
        return array.sort(function(a, b){return (a.timer+a.penalty)-(b.timer+b.penalty)})
    };

    return(
        <>
        <div className='podium'>
            <span className="questionPodium">Will you make the podium?</span>
            {players.map((cul, index) => 
                <h3>{cul.name}: <Timer time={cul.timer + cul.penalty} /></h3>
                
            )}
            </div>
        </>
    )
}

export default Podium;
