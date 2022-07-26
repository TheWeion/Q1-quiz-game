import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Button from 'react-bootstrap/Button';
import { Podium } from '../../components';
const GameOver = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

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
				<div className="col">
					<Button onClick={handleClick}>Main Menu</Button>
				</div>
			</div>
		</>
	);
}

export default GameOver;
