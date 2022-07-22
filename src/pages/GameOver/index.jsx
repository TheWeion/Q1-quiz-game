import React from 'react';
import './styles.css';
import { Podium } from '../../components';
import { useSelector } from 'react-redux'; //eslint-disable-line no-undef
const GameOver = () => {

	const players = useSelector(state => state.playersReducer);
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
