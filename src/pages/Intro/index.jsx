import React from 'react';
import imgIntro from './intro.svg';

const Intro = () => {

	return (
	<>
		<h1>Introduction</h1>
		<img src={imgIntro} alt="intro" />
		<p>Answer as quickly as you can to cross the finish line!</p>
	</>
  );
};

export default Intro;