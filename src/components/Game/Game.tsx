import { JSX, useState } from 'react'
import { Board } from '../Board';
import './Game.css'
import { calculateWinner } from '../../helper';

export const Game = (): JSX.Element => {
	const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true); // TODO: set default value to false.
	// TODO: Add modal window starting the game.
	
	const onSquareChosen = (index: number): 'x' | 'o' => {
		const result = xIsNext ? 'x' : 'o';
		setXIsNext(!xIsNext);

		const resultBoard = [...board];
		resultBoard[index] = result;
		setBoard(resultBoard)
		
		const winner = calculateWinner(resultBoard);
		if (winner) {
			alert(`${winner} is winner!`)
		}

		return result;
	}

	return <div className='gameWrapper'>
		<Board
			board={board}
			xIsNext={xIsNext}
			onSquareChosen={onSquareChosen}
		/>
	</div>
};

export default Game;