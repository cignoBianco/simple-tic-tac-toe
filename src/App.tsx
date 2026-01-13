import { JSX } from 'react';
import './App.css';
import { Game } from './components';

function App(): JSX.Element {
  return (
	  <div data-theme="dark" className="App">
		  <h1>Tic Tac Toe</h1>
		  <Game/>
    </div>
  );
}

export default App;
