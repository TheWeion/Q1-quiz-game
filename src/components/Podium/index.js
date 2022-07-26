import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './style.css'
import { socket } from '../../socket/socket.js';
import Timer from '../Timer';

const Podium = () => {
    const infos = useSelector(state => state.infoReducer);
    const playerFromReducer = useSelector(state => state.playersReducer);
    const [positions, setPositions] = useState([]);

    socket.emit('getPlayers', {roomId: infos.roomId});

    useEffect(()=>{
        if (infos.multiPlay) {
            socket.on('getPlayers', (res)=>{
                if (res.status === 'OK') {
                    console.log(res.data.length);
                    setPositions(sortByTime(res.data));
                }
            });
        } else {
            setPositions(sortByTime(playerFromReducer));
        }
    }, [socket]);

    const sortByTime = (array) => {
        return array.sort(function(a, b){return (a.timer+a.penalty)-(b.timer+b.penalty)})
    };

    const currentPlayerName = (cur) => {
        if (cur.id === infos.playerId) {
            return "(You)";
        } else {
            return cur.name;
        }
    };

    const getPosition = (playerId) => {
        if (positions.length > 0) {
            for (let ind = 0; ind < positions.length; ind++) {
                let cur = positions[ind];
                if (cur.id === playerId) {
                    if (ind === 0) {
                        return "1st place";
                    } else if (ind === 1) {
                        return "2nd place";
                    } else if (ind === 2) {
                        return "3rd place";
                    } else if (ind === 3) {
                        return "4th place";
                    } else {
                        return (ind + 1).toString() + "th place";
                    }
                }
            }
        }
    };

    return(
        <>
        <div className='podium'>
            <span className="questionPodium">You are { getPosition(infos.playerId) }</span>
            {positions.map((cur) => 
                <h3>{currentPlayerName(cur)}: <Timer time={cur.timer + cur.penalty} /></h3>
                
            )}
            </div>
        </>
    )
}

export default Podium;
