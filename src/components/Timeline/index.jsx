import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';

//import {Howl} from "howler"

import './style.css'



const Timeline = ({players, handleClick}) => {

  const [position, setPosition] = useState("progress-line1"); 
  const [position1, setPosition1] = useState("progress-line1");
  const [position2, setPosition2] = useState("progress-line1");
  const [position3, setPosition3] = useState("progress-line1");

  //now i need to have a function whereby it moves the position once the correct question is pressed 
  //make it so that it doesnt need to be changed
  //inline
  //dynamic values 
  //make each car move separate 

  useEffect(()=> {
      for(let i=0; i<players.length; i++){
      console.log(players[i])
      if(players[i].lap == 1 ){
        setPosition("correct-line1")
        //callMySound(soundSrc);
      }if(players[i].lap == 2 ){
        setPosition("correct-line2")
      }if(players[i].lap == 3 ){
        setPosition("correct-line3")
      }if(players[i].lap == 4 ){
        setPosition("correct-line4")
      }if(players[i].lap == 5 ){
        setPosition("correct-line5")
      }if(players[i].lap == 6 ){
        setPosition("correct-line6")
      }if(players[i].lap == 7 ){
        setPosition("correct-line7")
      }if(players[i].lap == 8 ){
        setPosition("correct-line8")
      }if(players[i].lap == 9 ){
        setPosition("correct-line9")
      }if(players[i].lap == 10 ){
        setPosition("correct-line2")
      }else{
        console.log('well that didnt work')
      }
      setPosition("correct-line1");
    }
  },[])
  
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
    <>  <header>
          <div className='container1'>
            <div className={position}></div>
            <div className={position}></div>
            <div className={position}></div>
            <div className={position}></div>
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
