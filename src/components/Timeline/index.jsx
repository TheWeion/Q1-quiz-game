import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {Howl} from "howler"

import './style.css';



const Timeline = ({players, totalLap}) => {

  /*const [player1Position, setPlayer1Position] = useState("progress-line1"); 
  const [player2Position, setPlayer2Position] = useState("progress-line1");
  const [player3Position, setPlayer3Position] = useState("progress-line1");
  const [player4Position, setPlayer4Position] = useState("progress-line1");*/

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

  /*useEffect(()=> {
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
  },[player1]);*/
  
    //callMySound(soundSrc);
  
  

  /*const soundSrc = '../../../public/engine.mp3';

  const callMySound = (src) => {
    const sound= new Howl({
      src, 
      html5: true
    })
    sound.play()
  }*/

  const generateCar = (curPlayer) => {
    let lap = curPlayer.lap;
    let finish = curPlayer.finish;
    let html = `
      <div class='row'>`;
    for (let ind = 0; ind < totalLap; ind++) {
      if (finish) {
        html = html + `<div class='col'></div>`;
      } else {
        if (ind === lap) {
          html = html + `<div class='col'><img src='./TestCar.png' style='width: 55px;' /></div>`;
        } else {
          html = html + `<div class='col'></div>`;
        }
      }
    }
    if (finish) {
      html = html + `<div class='col'><img src='./TestCar.png' style='width: 55px;' /></div>`;
    } else {
      html = html + `<div class='col'></div>`;
    }
    html = html + `</div>`;
    return <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}/>;
  };
  
  const generateLabel = () => {
    let html = `
      <div class='row'>`;
    for (let ind = 0; ind < totalLap; ind++) {
      html = html + `<div class='col'>L ${ind + 1}</div>`;
    }
    html = html + `<div class='col'>FIN</div>`;
    html = html + `</div>`;
    return <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}/>;
  };
    
  return (
    <>  
        <header>
          <div className='container1'>
            { generateCar(players[0]) }
            { generateCar(players[1]) }
            { generateCar(players[2]) }
            { generateCar(players[3]) }
          </div>
          { generateLabel() }                     
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
