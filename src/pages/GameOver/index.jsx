import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles.css';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { Podium } from '../../components';


const GameOver = () => {

	const players = useSelector(state => state.playersReducer);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}
	
	const exitHandler = () => {
		navigate('/');
	}

	const leaderboardHandler = () => {
		navigate('/leaderboard')
	}
	
	return (
		<>
			<img className='podium2'></img>
			<Button id="nav-next" onClick={leaderboardHandler}>Leaderboard</Button>
		</>
	);
}

export default GameOver;