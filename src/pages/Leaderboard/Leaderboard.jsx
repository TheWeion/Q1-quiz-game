import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Leaderboard = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	return (
		<>
			<NavLink id="nav-exit" to="/">X</NavLink>
			<h1>Leaderboard</h1>
			{/* <LeaderboardRender /> */}
			<NavLink id="nav-back" onClick={handleClick}>Back</NavLink>
		</>
	);
}

export default Leaderboard;