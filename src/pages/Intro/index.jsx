import React from 'react';
import imgIntro from './intro.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Intro = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}

	return (
	<>
		<NavLink id="nav-exit" to="/">X</NavLink>
		<h1>Introduction</h1>
		<img src={imgIntro} alt="intro" />
		<p>Answer as quickly as you can to cross the finish line!</p>
		<NavLink id="nav-next" to="/settings">Next</NavLink><br />
		<NavLink id="nav-back" to="#" onClick={handleClick}>Back</NavLink>
	</>
  );
};

export default Intro;