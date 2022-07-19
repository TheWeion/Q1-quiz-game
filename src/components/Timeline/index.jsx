import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
// import {Howl} from "howler"
import './style.css'



const Timeline = ({player, questions}) => {

  const [position, setPosition] = useState("progress-line1"); 
  

  //now i need to have a function whereby it moves the position once the correct question is pressed 
  const changePosition = (e) => {
    e.preventDefault("");
    setPosition("correct-line1");
    // callMySound(soundSrc);
  }

  // const soundSrc = '../../../public/engine.mp3';

  // const callMySound = (src) => {
  //   const sound= new Howl({
  //     src, 
  //     html5: true
  //   })
  //   sound.play()
  // }


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
                     <button className="Cbtn" onClick={changePosition}>correct answer button </button>
                     <button>incorrect answer button</button>
        </header>
        <Outlet />
            </>
  )
}


export default Timeline;

/*onClick={() => callMySound(soundSrc)}*/

//create a use effect so it re renders on every click with the api answers 
//then try so that only one moves at a time 


