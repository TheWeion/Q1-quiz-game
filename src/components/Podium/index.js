import React from 'react';
import './style.css'
import Timer from '../Timer';

const Podium = ({players}) => {
    console.log(players)

    return(
        <>
        <div className='podium'>
            {players.map((cul, index) => 
                <h3>{cul.name}: <Timer time={cul.timer + cul.penalty} /></h3>
                
            )}
        </div>
        </>
    )
}

export default Podium;
