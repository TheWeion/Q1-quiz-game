import React from 'react';
import './styles.css';
import { Podium } from '../../components';

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