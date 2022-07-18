import React from 'react';
import QuizRender from '../../components/'

const Game = () => {
	return (
		<>
			<ScoreBoard />
			<Timer />
			<QuizRender />
			<Radio />
			<RaceTrack />
		</>
	);
}

export default Game;