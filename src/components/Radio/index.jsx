import React from 'react';
import './style.css'

const Radio = () => {

    //generates random radio quote on render

 const Radiodata = [`"box,box,box"`, `"full pace now"`, `"DRS available"`, `"You got this!"`, `"Couple more laps on the softs"`]

 let randomQuote = Radiodata[Math.floor(Math.random()*Radiodata.length)];


return(
    <>
    <div className='Wrapper'>
        <span className='radioSpan'>Radio</span>
        <img src='waveform.jpg' className='waveform'></img>
    <h3 className='h31'>{randomQuote}</h3>
    </div>
    </>
)

}

export default Radio;
