import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createSinglePlay } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';
import { socket } from '../../socket/socket.js';
import './styles.css';

const MenuForm = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate();
	const players = useSelector(state => state.playersReducer);

  const handleSinglePlay = () => {
    let html = ``;
    html = html + `
      <div className="row">
        <div className="col"><label for="playerName">Player Name</label><input type="text" id="playerName" name="playerName"></input><button id="join_single_play_button" class="btn btn-primary">Join</button></div>
      </div>`;
    const singlePlayButton = document.getElementById("single_play_button");
    singlePlayButton.className = "btn btn-primary";
    const multiPlayButton = document.getElementById("multi_play_button");
    multiPlayButton.className = "btn btnc btn-secondary";
    const intputFormDiv = document.getElementById("input_form");
    if (intputFormDiv !== undefined && intputFormDiv !== null) {
      intputFormDiv.innerHTML = DOMPurify.sanitize(html);
    }
    const joinSinglePlayButton = document.getElementById("join_single_play_button");
    if (joinSinglePlayButton !== undefined && joinSinglePlayButton !== null) {
      joinSinglePlayButton.addEventListener('click', ()=>{
        const joinPlayerName = document.getElementById("playerName").value;
        if (joinPlayerName !== undefined && joinPlayerName !== null && joinPlayerName !== "") {
          dispatch(createSinglePlay(joinPlayerName));
          navigate('/intro');
        } else {
          alert('Please enter player name');
        }
      });
    }
  };

  const handleMultiPlay = () => {
    let html = ``;
    html = html + `
      <div className="row">
        <div className="col">
          <label for="playerName">User Name</label>
          <input type="text" id="playerName" name="playerName" ></input>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col">
          <label for="playerName">Room</label>
          <select id="room_number"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
          <button id="join_multi_play_button" class="btn btn-primary">Join</button>
        </div>
      </div>`;
    const singlePlayButton = document.getElementById("single_play_button");
    singlePlayButton.className = "btn btn-secondary";
    const multiPlayButton = document.getElementById("multi_play_button");
    multiPlayButton.className = "btn btnc btn-primary";
    const intputFormDiv = document.getElementById("input_form");
    if (intputFormDiv !== undefined && intputFormDiv !== null) {
      intputFormDiv.innerHTML = DOMPurify.sanitize(html);
    }
    const joinMultiPlayButton = document.getElementById("join_multi_play_button");
    if (joinMultiPlayButton !== undefined && joinMultiPlayButton !== null) {
      joinMultiPlayButton.addEventListener('click', ()=>{
        const joinPlayerName = document.getElementById("playerName").value;
        if (joinPlayerName !== undefined && joinPlayerName !== null && joinPlayerName !== "") {
          const roomNumber = document.getElementById("room_number").value;
          console.log('join multi play: ' + roomNumber);
        } else {
          alert('Please enter player name');
        }
      });
    }
  };

  return (
		<>
      <div className="card card-body">
        <div className="row">
          <div className="col">
            <div className='images'></div>
            <div className='image2'></div>
            <div className='explanantion'><h1 className='title'>Motorsports now meets the Quizworld</h1></div>
            <button id="single_play_button" className="btn btn-secondary" onClick={handleSinglePlay}>Single Play</button>
            <button id="multi_play_button" className="btn btnc btn-secondary" onClick={handleMultiPlay}>Multi Play</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="input_form"></div>
          </div>
        </div>
      </div>
		</>
  );
};

export default MenuForm;
