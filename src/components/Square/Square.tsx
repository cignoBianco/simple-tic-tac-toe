import { useState } from 'react';
import './Square.css'

interface SquareProps {
	onSquareClick: () => 'x' | 'o'
}

export const Square = ({ onSquareClick }: SquareProps) => {
	const [sign, setSign] = useState<'x' | 'o' | null>(null);

	return (
		<button
			className='square'
			onClick={(event: React.MouseEvent<HTMLElement>) => {
				setSign(onSquareClick());
			}}
		>
			{sign || ''}
		</button>
	);
};

export default Square;