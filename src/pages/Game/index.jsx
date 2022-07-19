import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';
import Radio from '../../components/Radio';

const Game = () => {

	const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);

	return (
		<>
			<Question playerId={1} players={players} questions={questions} />
			<Timeline playerId={1} players={players} />
      		<Radio/>
		</>
	);
}

export default Game