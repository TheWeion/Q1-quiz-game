import React, { useState, useEffect } from "react";
import './style.css'

const Timer = (playerId, players) => {

  //want to have the timer render on page and store when all questions are finished 

 //const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

        return (
          <div className="stopwatch">
            <div className="numbers">
             
              </div>
          </div>
        );
      };
 
/* <span>{("0" + Math.floor((targetPlayer.timer / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((targetPlayer.timer / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((targetPlayer.timer / 10) % 100)).slice(-2)}</span>
              */
export default Timer;

