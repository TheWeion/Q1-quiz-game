import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const Leaderboard = () => {
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
			<h1>Leaderboard</h1>
			{/* <LeaderboardRender /> */}
			<Button id="nav-back" variant="danger" onClick={handleClick}>Back</Button>
		</>
	);
}

export default Leaderboard;