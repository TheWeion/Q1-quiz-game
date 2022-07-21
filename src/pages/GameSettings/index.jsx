import React from 'react';
import GetQuestions from '../../components/GetQuestions';
import './styles.css';

const GameSettings = () => {


	return (
	<>
	<div className="flag2">
		<h1 className="selection">Selection</h1>
		{ <GetQuestions /> }
		<br />
    	{/* <GameConfig /> */}
		</div>
	</>
  );
};

export default GameSettings;