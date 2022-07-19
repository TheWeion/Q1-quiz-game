import React from 'react';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';
import Timer from '../../components/Timer';
import Radio from '../../components/Radio';
// import QuizRender from '../../components/'
import {useSelector} from 'react-redux';

const Game = () => {

	const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);

	return (
		<>
			<Question  playerId={1} players = {players} questions = {questions}/>

			<Timeline  playerId={1} players = {players} questions = {questions}/>
      		<Timer  playerId={1} players = {players} questions = {questions} />
      		<Radio/>

			{/* <ScoreBoard />
			<Timer />
			<QuizRender />
			<Radio />
			<RaceTrack /> */}
		</>
	);
}

export default Game;