import React from 'react';
import './style.css'
import Timer from '../Timer';

const Podium = ({players}) => {
    console.log(players)

    return(
        <>
        <div className='podium'>
            {players.map((cul, index) => 
                <h2>{cul.name}: <Timer time={cul.timer + cul.penalty} />  Question: <Timer time={cul.timer} />  Penalty: <Timer time={cul.penalty} /></h2>
                
            )}
        </div>
        </>
    )
}

export default Podium;
