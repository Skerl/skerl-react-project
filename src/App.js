import React, {useState} from "react";
import Square from "./Square";
import './styles.css'

function App() {
    const[square, setSquare] = useState(Array(9).fill(null));
    const[isX, setX] = useState(true);

    function handleClick(i) {
        const nextSquare = square.slice();

        if (!square[i]) {
            if (isX) {
                nextSquare[i] = 'x';
            } else {
                nextSquare[i] = 'o';
            } if (winner) {
                return;
            }
            setX(!isX);
            setSquare(nextSquare);
        }

      }

    function clearSquare() {
        setSquare(Array(9).fill(null));
        console.log("cleared");
        setX(true);
    }


    const winner = isWinner(square);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isX ? 'X' : 'O');
    }

  return (
    <div className="App">
        <div className="status">{status}</div>
        <button className="clearbtn" onClick={clearSquare}>Clear</button>
        <div className="tictac">
            <div className="board-row">
                <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={square[3]}  onSquareClick={() => handleClick(3)}/>
                <Square value={square[4]}  onSquareClick={() => handleClick(4)}/>
                <Square value={square[5]}  onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={square[6]}  onSquareClick={() => handleClick(6)}/>
                <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={square[8]}  onSquareClick={() => handleClick(8)}/>
            </div>

        </div>
    </div>
  );

    function isWinner(square) {
        const matrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < matrix.length; i++) {
            const [a, b, c] = matrix[i];

            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]; // Повертаємо переможця ('x' або 'o')
            }
        }
        return null;
    }
}

export default App;