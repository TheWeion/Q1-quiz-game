import React from "react";
import './style.css'

const Timer = ({time}) => {
  return (
    <>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </>
  );
};
 
export default Timer;
