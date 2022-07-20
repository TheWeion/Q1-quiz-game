import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';

//import {Howl} from "howler"

import './style.css';



const Timeline = ({player1, player2, player3, player4, totalLap}) => {

  const [player1Position, setPlayer1Position] = useState("progress-line1"); 
  const [player2Position, setPlayer2Position] = useState("progress-line1");
  const [player3Position, setPlayer3Position] = useState("progress-line1");
  const [player4Position, setPlayer4Position] = useState("progress-line1");

  //now i need to have a function whereby it moves the position once the correct question is pressed 
  //make it so that it doesnt need to be changed
  //inline
  //dynamic values 
  //make each car move separate 

  //callMySound(soundSrc);

  useEffect(()=> {
    let player1PositionClass = "progress-line1";
    console.log(totalLap);
    for (let ind = 0; ind < totalLap; ind++) {
      if (player1 === 0) {
        player1PositionClass = "progress-line1";
      } else {
        if (player1 === ind) {
        player1PositionClass = "correct-line" + ind;
      }
    }
    }
    setPlayer1Position(player1PositionClass);
  },[player1]);

  useEffect(()=> {
    let player2PositionClass = "progress-line1";
    console.log(totalLap);
    for (let ind = 0; ind < totalLap; ind++) {
      if (player2 === 0) {
        player2PositionClass = "progress-line1";
      } else {
        if (player2 === ind) {
        player2PositionClass = "correct-line" + ind;
      }
    }
  }
    setPlayer2Position(player2PositionClass);
  },[player2]);

  useEffect(()=> {
    let player3PositionClass = "progress-line1";
    console.log(totalLap);
    for (let ind = 0; ind < totalLap; ind++) {
      if (player3 === 0) {
        player3PositionClass = "progress-line1";
      } else {
        if (player3 === ind) {
        player3PositionClass = "correct-line" + ind;
      }
    }
  }
    setPlayer3Position(player3PositionClass);
  },[player3]);

  useEffect(()=> {
    let player4PositionClass = "progress-line1";
    console.log(totalLap);
    for (let ind = 0; ind < totalLap; ind++) {
      if (player4 === 0) {
        player4PositionClass = "progress-line1";
      } else {
        if (player1 === ind) {
        player4PositionClass = "correct-line" + ind;
      }
    }
  }
    setPlayer4Position(player4PositionClass);
  },[player4]);
  
    //callMySound(soundSrc);
  
  

  /*const soundSrc = '../../../public/engine.mp3';

  const callMySound = (src) => {
    const sound= new Howl({
      src, 
      html5: true
    })
    sound.play()
  }*/


  return (
    <>  
        <header>
          <div className='container1'>
            <div className={player1Position}></div>
            <div className={player2Position}></div>
            <div className={player3Position}></div>
            <div className={player4Position}></div>
          </div>
                <label>L1</label>
                <label>L2</label>
                <label>L3</label>
                <label>L4</label>
                <label>L5</label>
                <label>L6</label>
                <label>L7</label>
                <label>L8</label>
                <label>L9</label>
                <label>L10</label>
                     
        </header>
        <Outlet />
    </>
  )
}


export default Timeline;

/*onClick={() => callMySound(soundSrc)}*/

//create a use effect so it re renders on every click with the api answers 
//then try so that only one moves at a time 
/*
//for(let i=0; i<questions.length; i++){
  console.log(questions[i])
  if(questions[i].correct_answer ==  ){*/
