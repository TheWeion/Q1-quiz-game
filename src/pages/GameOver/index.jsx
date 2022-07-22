import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { Podium } from '../../components';



const GameOver = () => {

	const players = useSelector(state => state.playersReducer);
	
	return (
		<>
		<Podium players={players}/>
		<div className="podium2"></div>
		</>
	);
}

export default GameOver;