import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';

const GameOver = () => {
	const navigate = useNavigate();
	
	const exitHandler = () => {
		navigate('/');
	}
	
	return (
		<>
			<CloseButton id="nav-exit" onClick={exitHandler} />
			<h1>Podium</h1>
			{/* <PodiumRender /> */}

		</>
	);
}

export default GameOver;