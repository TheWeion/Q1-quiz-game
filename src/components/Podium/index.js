import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './style.css'
import { socket } from '../../socket/socket.js';
import Timer from '../Timer';

const Podium = () => {
    const infos = useSelector(state => state.infoReducer);
    const [players, setPlayers] = useState([]);

    socket.emit('getPlayers', {roomId: infos.roomId});

    useEffect(()=>{
        if (infos.multiPlay) {
            socket.on('getPlayers', (res)=>{
                if (res.status === 'OK') {
                    setPlayers(res.data);
                }
            });
        }
    }, [socket]);

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
