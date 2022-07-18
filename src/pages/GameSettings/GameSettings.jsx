import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GameSettings = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	<>
		<NavLink id="nav-exit" to="/">X</NavLink>
		<h1>Selection</h1>
		{/* <GameConfig /> */}
		<NavLink id="nav-next" to="/rules">Prepare Car</NavLink>
		<NavLink id="nav-back" onClick={handleClick}>Back</NavLink>
	</>	
};

export default GameSettings;