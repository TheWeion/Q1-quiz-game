import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const GameNav = () => {
	const navigate = useNavigate();
	let navLoc = null;
	let navText = '';
	let isBackVisible = true;
	let isNextVisible = true;

	switch (window.location.pathname) {
		case '/':
			isBackVisible = false;
			isNextVisible = false;
			break;
		case '/intro':
			navLoc = '/settings';
			navText = 'Next';
			isBackVisible = true;
			break;
		case '/settings':
			isNextVisible = false;
			break;
		case '/rules':
			isBackVisible = true;
			isNextVisible = false;
			break;
		case '/game':
			isBackVisible = false;
			isNextVisible = false;
			break;
		case '/gameover':
			isBackVisible = false;
			isNextVisible = true;
			navLoc = '/leaderboard';
			navText = 'Leaderboard';
			break;
		case '/leaderboard':
			isBackVisible = true;
			isNextVisible = false;
			//navLoc = '/';
			//navText = 'Main Menu';
			break;
		case '/waiting':
			isBackVisible = false;
			isNextVisible = false;
			break;
		default:
			isBackVisible = true;
			isNextVisible = true;
			break;
	};


	const handleClick = () => {
		navigate(navLoc);
	}
	
	const handleBack = () => {
		navigate(-1);
	}

	return (
		<>
			{ isBackVisible ? <Button id="nav-back" variant="danger" onClick={handleBack}>Back</Button> : null	}
			{ isNextVisible ? <Button id="nav-next" onClick={handleClick}>{navText}</Button> : null }
		</>
  );
}

export default GameNav;