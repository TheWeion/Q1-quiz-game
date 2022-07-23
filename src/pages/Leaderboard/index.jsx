import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createMultiPlay } from "../../actions";
import { useDispatch } from "react-redux";
import { Profiles } from '../../components';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Leaderboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		// Reset all data in players
		dispatch(createMultiPlay());
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