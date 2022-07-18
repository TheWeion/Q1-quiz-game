import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import GetQuestions from '../../components/GetQuestions';

const GameSettings = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	return (
	<>
		<NavLink id="nav-exit" to="/">X</NavLink>
		<h1>Selection</h1>
		{ <GetQuestions /> }
		<br />
    	{/* <GameConfig /> */}
		<NavLink id="nav-next" to="/rules">Prepare Car</NavLink>
		{/* <NavLink id="nav-back" to "#" onClick={handleClick}>Back</NavLink> */}
	</>
  );
};

export default GameSettings;