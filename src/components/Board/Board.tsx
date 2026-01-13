import { JSX } from 'react';
import { Square } from '../Square';
import './Board.css'

interface BoardProps {
	board: (string | null)[],
	xIsNext: boolean,
	onSquareChosen: (index: number) => 'x' | 'o'
}

export const Board = ({ board, xIsNext, onSquareChosen }: BoardProps) => {
	return <div className='boardWrapper'>
		{board.map((_, index) => <Square
			key={index}
			onSquareClick={() => onSquareChosen(index)}
		/>)}
	</div>
};

export default Board;