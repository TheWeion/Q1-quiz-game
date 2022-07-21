import React from 'react';
import Question from '../../components/Question';

const Game = () => {
	return (
		<>
			<Question playerId={1} />
			<br />
		</>
	);
}

export default Game

/*
<Question  playerId={1} players = {players} questions = {questions}  />
			<Timeline  playerId={1} players = {players} questions = {questions}/>
      		<Timer  playerId={1} players = {players}  />
      		<Radio/>

			{/* <ScoreBoard />
			<Timer />
			<QuizRender />
			<Radio />
			<RaceTrack /> */