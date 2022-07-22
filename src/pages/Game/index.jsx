import React from 'react';
import Question from '../../components/Question';
import './styles.css';

const Game = () => {
	return (
		<>
			<Question />
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