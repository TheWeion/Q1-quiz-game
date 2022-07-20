import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameOver = () => {
	const navigate = useNavigate();
	
	const exitHandler = () => {
		navigate('/');
	}
	
	return (
		<>
			<h1>Podium</h1>
			{/* <PodiumRender /> */}

		</>
	);
}

export default GameOver;