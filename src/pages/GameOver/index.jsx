import React from 'react';
import './styles.css';
import { Podium } from '../../components';
const GameOver = () => {
	return (
		<>
			<div className="row">
				<div className="col">
					<div className="timerChange">
						<Podium />
					</div>	
				</div>
				<div className="col">
					<div className="podium2"></div>
				</div>
			</div>
		</>
	);
}

export default GameOver;
