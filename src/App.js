import './App.css';
import {useState} from 'react';

function Square(props) {
  return (
    <button onClick={props.onClick} className="square">
      {props.value}
    </button>
  );
}

function Board(props) {
  
  function renderSquare(i) {
    return <Square onClick={() => props.clickHandler(i)} value={props.squares[i]}/>;
  }
  const status = 'Next player: ' + props.currPlayer;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState("X")

  function handleClick(i) {
    let newSquares = squares.slice();
    if (newSquares[i] !== currPlayer) {
      newSquares[i] = currPlayer;
      setSquares(newSquares);
      setCurrPlayer(currPlayer === "X" ? "O" : "X");
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} currPlayer={currPlayer} clickHandler={handleClick}/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}


export default Game;
