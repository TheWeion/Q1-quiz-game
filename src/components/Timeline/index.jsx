import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {Howl} from "howler"

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


  const soundSrc = ('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a');

  const callMySound = (src) => {
    const sound= new Howl({
      src, 
      html5: true
    })
    sound.play()
  };
  

  //this useEffect currently only works for the 10 lap I still need to fix the 5 and 15 lap 

  useEffect(()=> {
    let player1PositionClass = "progress-line1";
    console.log(totalLap);
    for (let ind = 0; ind < totalLap; ind++) {
      if (player1 === 0) {
        player1PositionClass = "progress-line1";
      } else {
        if (player1 === ind) {
          callMySound(soundSrc);
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


  const generateLabel = () => {
    let html = ``;
    if(totalLap === 5){
      for (let ind = 0; ind < totalLap; ind++) {
        html = html + `<label>L ${ind + 1}</label>`;
      }
      }else if(totalLap === 10){
        for (let ind = 0; ind < totalLap; ind++) {
          html = html + `<label class='label1'>L ${ind + 1}</label>`;
        }
      }else if(totalLap === 15){
        for (let ind = 0; ind < totalLap; ind++) {
          html = html + `<label class='label2'>L ${ind + 1}</label>`;
        }
      }
      return <div dangerouslySetInnerHTML={{__html: html}}/>;
    };
    
  return (
    <>  
        <header>
          <div className='container1'>
            <div className={player1Position}></div>
            <div className={player2Position}></div>
            <div className={player3Position}></div>
            <div className={player4Position}></div>
          </div>
          <div className='label-wrap'>
          { generateLabel() }       
          </div>    
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

  //I might generate the cars and then loop through the css the same way the label has been generated maybe 
