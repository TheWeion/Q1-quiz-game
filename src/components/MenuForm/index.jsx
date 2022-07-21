import React from 'react';
import DOMPurify from 'dompurify';

const MenuForm = () => {

  const handleSinglePlay = () => {
    let html = ``;
    html = html + `
      <div className="row">
        <div className="col"><label for="userName">User Name</label><input type="text" id="userName" name="userName"></input><button id="join_single_play_button" class="btn btn-primary">Join</button></div>
      </div>`;
    const singlePlayButton = document.getElementById("single_play_button");
    singlePlayButton.className = "btn btn-primary";
    const multiPlayButton = document.getElementById("multi_play_button");
    multiPlayButton.className = "btn btn-secondary";
    const intputFormDiv = document.getElementById("input_form");
    if (intputFormDiv !== undefined && intputFormDiv !== null) {
      intputFormDiv.innerHTML = DOMPurify.sanitize(html);
    }
    const joinSinglePlayButton = document.getElementById("join_single_play_button");
    if (joinSinglePlayButton !== undefined && joinSinglePlayButton !== null) {
      joinSinglePlayButton.addEventListener('click', ()=>{
        const joinUsername = document.getElementById("userName").value;
        if (joinUsername !== undefined && joinUsername !== null && joinUsername !== "") {
          console.log('join single play: ' + joinUsername);
        } else {
          alert('Please enter username');
        }
      });
    }
  };

  const handleMultiPlay = () => {
    let html = ``;
    html = html + `
      <div className="row">
        <div className="col-8"><label for="userName">User Name</label><input type="text" id="userName" name="userName" ></input></div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col"><label>New room: </label><button id="create_new_room_button" class="btn btn-primary">Create room</button></div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col"><label>Join room: </label><input type="text" id="pin" name="pin" placeHolder="PIN"></input><button id="join_multi_play_button" class="btn btn-primary">Join</button></div>
      </div>`;
    const singlePlayButton = document.getElementById("single_play_button");
    singlePlayButton.className = "btn btn-secondary";
    const multiPlayButton = document.getElementById("multi_play_button");
    multiPlayButton.className = "btn btn-primary";
    const intputFormDiv = document.getElementById("input_form");
    if (intputFormDiv !== undefined && intputFormDiv !== null) {
      intputFormDiv.innerHTML = DOMPurify.sanitize(html);
    }
    const createNewRoomButton = document.getElementById("create_new_room_button");
    if (createNewRoomButton !== undefined && createNewRoomButton !== null) {
      createNewRoomButton.addEventListener('click', ()=>{
        const joinUsername = document.getElementById("userName").value;
        if (joinUsername !== undefined && joinUsername !== null && joinUsername !== "") {
          console.log('create new room: ' + joinUsername);
        } else {
          alert('Please enter username');
        }
      });
    }
    const joinMultiPlayButton = document.getElementById("join_multi_play_button");
    if (joinMultiPlayButton !== undefined && joinMultiPlayButton !== null) {
      joinMultiPlayButton.addEventListener('click', ()=>{
        const joinUsername = document.getElementById("userName").value;
        if (joinUsername !== undefined && joinUsername !== null && joinUsername !== "") {
          const joinPin = document.getElementById("pin").value;
          if (joinPin !== undefined && joinPin !== null && joinPin !== "") {
            console.log('join multi play: ' + joinPin);
          } else {
            alert('Please enter PIN');
          }
        } else {
          alert('Please enter username');
        }
      });
    }
  };

  return (
		<>
      <div className="card card-body">
        <div className="row">
          <div className="col">
            <button id="single_play_button" className="btn btn-secondary" onClick={handleSinglePlay}>Single Play</button>
            <button id="multi_play_button" className="btn btn-secondary" onClick={handleMultiPlay}>Multi Play</button>
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
