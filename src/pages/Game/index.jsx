import React from 'react';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';
import Timer from '../../components/Timer';
import Radio from '../../components/Radio';
// import QuizRender from '../../components/'
import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';

const Game = () => {

	const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);

	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	
	useEffect(() => {
	  let interval;
	  if (running) {
		interval = setInterval(() => {
		  setTime((prevTime) => prevTime + 10);
		}, 10);
	  } else if (!running) {
		clearInterval(interval);
	  }
	  return () => clearInterval(interval);
	}, [running]);

	return (
		<>
			<Question  playerId={1} players = {players} questions = {questions}  />
			<Timeline  playerId={1} players = {players} />
      		<Timer  playerId={1} players = {players}  />
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