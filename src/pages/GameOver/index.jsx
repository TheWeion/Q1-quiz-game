import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import './styles.css';
=======
>>>>>>> a73e3ce86cc13113ba71860ea2428e1d3dd269c3

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