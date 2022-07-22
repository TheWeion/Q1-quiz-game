import React from "react";
import './style.css';
import DOMPurify from 'dompurify';

const Lap = ({lap, total, finish}) => {
  const renderHTML = () => {
    let html = ``;
    if (finish) {
      html = `<div class="lap-label">Lap:</div><div class="lap"><span>FINISH</span></div>`;
    } else {
      html = `<div class="lap-label">Lap:</div><div class="lap"><span>${lap}</span></div><div class="lap-label">/</div><div class="lap"><span>${total}</span></div>`;
    }
    return <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}/>;
  };

  return (
    <>
      { renderHTML() }
    </>
  );
};
 
export default Lap;
