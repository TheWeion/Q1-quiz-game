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
    setPlayer1Position(player1PositionClass);
  },[player1]);
  
    //callMySound(soundSrc);
  
  

  /*const soundSrc = '../../../public/engine.mp3';

  const callMySound = (src) => {
    const sound= new Howl({
      src, 
      html5: true
    })
    sound.play()
  }*/

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

                <h3>You must answer a question correctly to have enough fuel to drive to the finish line</h3>
                     
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
