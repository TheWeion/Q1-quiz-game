import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePlayer } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Profiles } from '../../components';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Leaderboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const players = useSelector(state => state.playersReducer);

	const handleClick = () => {
		// Reset all data in players
		for (let ind = 0; ind < 4; ind++) {
			let player = players[ind];
            player.lap = 0;
            player.timer = 0;
            player.penalty = 0;
            player.drs_used = false;
            player.pit_entered = false;
            player.finish = false;
            player.is_bot = false;
			dispatch(updatePlayer(player));
		}
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