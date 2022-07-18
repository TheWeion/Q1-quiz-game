import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import GetQuestions from '../../components/GetQuestions';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const GameSettings = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	const exitHandler = () => {
		navigate('/');
	}

	return (
	<>
		<CloseButton id="nav-exit" onClick={exitHandler} />
		<h1>Selection</h1>
		{ <GetQuestions /> }
		<br />
    	{/* <GameConfig /> */}
		<Button id="nav-back" variant="danger" onClick={handleClick}>Back</Button>
	</>
  );
};

export default GameSettings;