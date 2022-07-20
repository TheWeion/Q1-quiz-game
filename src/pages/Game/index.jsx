import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';

const Game = () => {

	const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);

	return (
		<>
			<Question playerId={1} players={players} questions={questions} />
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