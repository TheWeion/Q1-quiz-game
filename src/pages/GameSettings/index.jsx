import React from 'react';
import GetQuestions from '../../components/GetQuestions';
import './styles.css';

const GameSettings = () => {
	return (
	<>
		<h1>Selection</h1>
		{ <GetQuestions /> }
		<br />
    	{/* <GameConfig /> */}
	</>
  );
};

export default GameSettings;