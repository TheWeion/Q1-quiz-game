import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useSelector } from 'react-redux';
import { Podium } from '../../components';


const GameOver = () => {

	const players = useSelector(state => state.playersReducer);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}
	
	return (
		<>
			<img className='podium2'></img>
		</>
	);
}

export default GameOver;