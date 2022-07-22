import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Button from 'react-bootstrap/Button';

const Rules = () => {
	const infos = useSelector(state => state.infoReducer);
	const players = useSelector(state => state.playerReducer);
	
	const dispatch = useDispatch();
    const navigate = useNavigate();

	const handleEngineStart = () => {
		if (!infos.multiPlay) {
			navigate('/game');
		} else {
			navigate('/waiting');
		}
	};

	return (
	<>
		<div className="flag">
			<div className='center1'>
				<h1>Rules</h1>
				<ul>
					<li>Each correct answer completes 1 lap</li>
					<li>Each wrong attempt incurs a 5 second penalty.</li>
					<li>You can open the DRS once - allowing you to skip 1 question.</li>
					<li>You cannot use DRS on the 1st or last lap!</li>
					<li>You can enter The Pit and get support once (only left with 2 answers but will spend 10 seconds).</li>
					<li>1st Place - Will earn you 25 additional points</li>
					<li>2nd Place - Will earn you 19 additional points</li>
					<li>3rd Place - Will earn you 15 additional points</li>
					<li>4th Place - Will earn you 10 additional points</li>
				</ul>
				<Button id="engineStart" onClick={handleEngineStart}>Engine Start</Button>
			</div>
		</div>
	</>
  );
};

export default Rules;