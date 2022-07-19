import React from 'react';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';
import Timer from '../../components/Timer';
import Radio from '../../components/Radio';
// import QuizRender from '../../components/'

const Game = () => {

	return (
		<>
			<Question playerId={1}/>

			<Timeline/>
      		<Timer/>
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