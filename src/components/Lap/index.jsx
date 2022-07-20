import React from "react";
import './style.css'

const Lap = ({lap, total}) => {
  return (
    <>
      <div class="lap-label">Lap:</div><div class="lap"><span>{lap}</span></div><div class="lap-label">/</div><div class="lap"><span>{total}</span></div>
    </>
  );
};
 
export default Lap;
