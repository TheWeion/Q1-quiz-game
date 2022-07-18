import React from 'react';
import imgIntro from './intro.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const Intro = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	const exitHandler = () => {
		navigate('/');
	}

	return (
	<>
		<CloseButton id="nav-exit" onClick={exitHandler} />
		<h1>Introduction</h1>
		<img src={imgIntro} alt="intro" />
		<p>Answer as quickly as you can to cross the finish line!</p>
		<Button id="nav-next" href="/settings">Next</Button>
		<Button id="nav-back" variant="danger" onClick={handleClick}>Back</Button>
	</>
  );
};

export default Intro;