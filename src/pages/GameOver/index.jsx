import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles.css';

const GameOver = () => {
	const navigate = useNavigate();
	
	const exitHandler = () => {
		navigate('/');
	}
	
	return (
		<>
			<img className='podium2'></img>

		</>
	);
}

export default GameOver;