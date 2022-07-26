import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Profiles } from '../../components';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Leaderboard = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<>
			<h1 className='leaderBoard'>Leaderboard</h1>
			<Profiles />
			<Button onClick={handleClick}>Main Menu</Button>
		</>
	);
}

export default Leaderboard;