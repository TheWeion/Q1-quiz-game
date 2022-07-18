import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const Rules = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	const exitHandler = () => {
		navigate('/');
	}

	const gameHandler = () => {
		navigate('/game');
	}

	return (
	<>
		<CloseButton id="nav-exit" onClick={exitHandler} />
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
		<Button id="nav-next" onClick={gameHandler}>Engine Start</Button>
		<Button id="nav-back" variant="danger" onClick={handleClick}>Back</Button>

	</>
  );
};

export default Rules;