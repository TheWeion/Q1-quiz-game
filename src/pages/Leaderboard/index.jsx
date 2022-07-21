import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createMultiPlay } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Profiles } from '../../components';
import Button from 'react-bootstrap/Button';

const Leaderboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const players = useSelector(state => state.playersReducer);

	const handleClick = () => {
		// Reset all data in players
		dispatch(createMultiPlay());
		navigate('/');
	};

	return (
		<>
			<h1>Leaderboard</h1>
			<Profiles />
			<Button onClick={handleClick}>Main Menu</Button>
		</>
	);
}

export default Leaderboard;