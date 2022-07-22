import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Podium } from '../../components';



const GameOver = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}
	
	return (
		<>
		<div className="timerChange">
		<Podium />
		</div>
		<div className="podium2"></div>
		</>
	);
}

export default GameOver;