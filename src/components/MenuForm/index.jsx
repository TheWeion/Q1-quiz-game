import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createSinglePlay, setPlayerId, setRoomId, setMultiPlay, updatePlayer } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';
import { socket } from '../../socket/socket.js'; // eslint-disable-line no-unused-vars
import './styles.css';

const MenuForm = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate();
	const players = useSelector(state => state.playersReducer); // eslint-disable-line no-unused-vars

  const handleSinglePlay = () => {
    let html = ``;
    html = html + `
      <div className="row">
        <div className="col"><label for="playerName">Player Name</label><input type="text" id="playerName" name="playerName"></input><button id="join_single_play_button" class="btn btn-primary">Join</button></div>
      </div>`;
    const singlePlayButton = document.getElementById("singlePlayButton");
    singlePlayButton.className = "btn btn-primary";
    const multiPlayButton = document.getElementById("multiPlayButton");
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
          dispatch(setPlayerId(0));
          dispatch(setRoomId(-1));
          dispatch(setMultiPlay(false));
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
          <label id="playerNameLabel" for="playerName">User Name</label>
          <input type="text" id="playerName" name="playerName" ></input>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col">
          <label id="roomLabel" for="roomNumber">Room</label>
          <select id="roomNumber"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
          <button id="joinMultiPlayButton" class="btn btn-primary">Join</button>
        </div>
        <div id="messageFromServer"></div>
      </div>`;
    const singlePlayButton = document.getElementById("singlePlayButton");
    singlePlayButton.className = "btn btn-secondary";
    const multiPlayButton = document.getElementById("multiPlayButton");
    multiPlayButton.className = "btn btnc btn-primary";
    const intputFormDiv = document.getElementById("input_form");
    if (intputFormDiv !== undefined && intputFormDiv !== null) {
      intputFormDiv.innerHTML = DOMPurify.sanitize(html);
    }
    const joinMultiPlayButton = document.getElementById("joinMultiPlayButton");
    if (joinMultiPlayButton !== undefined && joinMultiPlayButton !== null) {
      joinMultiPlayButton.addEventListener('click', ()=>{
        const joinPlayerName = document.getElementById("playerName").value;
        if (joinPlayerName !== undefined && joinPlayerName !== null && joinPlayerName !== "") {
          const roomNumber = document.getElementById("roomNumber").value;
          console.log('click');
          attemptJoinRoom(roomNumber, joinPlayerName).then((yourPositionId)=>{
            document.getElementById("singlePlayButton").hidden = true;
            document.getElementById("multiPlayButton").hidden = true;
            document.getElementById("playerNameLabel").hidden = true;
            document.getElementById("playerName").hidden = true;
            document.getElementById("roomLabel").hidden = true;
            document.getElementById("roomNumber").hidden = true;
            document.getElementById("joinMultiPlayButton").hidden = true;
            let player = players[yourPositionId];
            player.name = joinPlayerName;
            dispatch(updatePlayer(player));
            dispatch(setPlayerId(yourPositionId));
            dispatch(setRoomId(roomNumber));
            dispatch(setMultiPlay(true));
            if (yourPositionId === 0) {
              document.getElementById("messageFromServer").innerHTML = `<h2>You are the host</h2>`;
              wait(2).then(()=>{
                navigate('/intro');
              });
            } else {
              document.getElementById("messageFromServer").innerHTML = `<h2>Wait for a bit</h2>`;
              wait(2).then(()=>{
                navigate('/waiting');
              });
            }
          });
        } else {
          alert('Please enter player name');
        }
      });
    }
  };

  const attemptJoinRoom = (room, name) => {
    return new Promise((resolve, reject) => {
      socket.emit('joinRoom', {"roomId": room, "name": name});
      socket.on('yourId', (res)=>{
        console.log(res);
        resolve(res.yourId);
      });
    });
  };

  const wait = async(second) => {
    return new Promise(resolve => setTimeout(resolve, second*1000));
  };

  return (
		<>
      <div className="card card-body">
        <div className="row">
          <div className="col">
            <div className='images'></div>
            <div className='image2'></div>
            <div className='explanantion'><h1 className='title'>Motorsports now meets the Quizworld</h1></div>
            <button id="singlePlayButton" className="btn btn-secondary" onClick={handleSinglePlay}>Single Play</button>
            <button id="multiPlayButton" className="btn btnc btn-secondary" onClick={handleMultiPlay}>Multi Play</button>
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
