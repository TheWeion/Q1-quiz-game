import React from 'react';
import './style.css'
import Timer from '../Timer';

const Podium = ({players}) => {
    console.log(players)

    return(
        <>
        {players.map((cul, index) => 
            <h1>{cul.name}: <Timer time={cul.timer + cul.penalty} /></h1>
            
        )}
        </>
    )
}

export default Podium;
