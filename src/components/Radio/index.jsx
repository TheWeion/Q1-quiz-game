import React from 'react';
import './style.css'

const Radio = ({message}) => {
    return(
        <>
            <div className='Wrapper'>
                <span className='radioSpan'>Radio</span>
                <h3>{ message }</h3>
            </div>
        </>
    )
}

export default Radio;


/*
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
)*/

//add radio static here and shorten the engine sound
 /*
const request = new XMLHttpRequest();
request.open('GET', 'HardaTider-Har&nu.mp3', true);
request.responseType = 'arraybuffer';
 
request.addEventListener('load', function () {
  var context = new (window.AudioContext || window.webkitAudioContext)();
 
  context.decodeAudioData(request.response, function (buffer) {
    React.render(
        <Waveform buffer={buffer} width={720} color="cadetblue" />,
        document.getElementById('waveform')
        );
  });
});
 
request.send();
*/
