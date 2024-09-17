import React, { useMemo, useState, useEffect } from 'react'
import GameComponent from './GameComponent'

const SingleComponent = () => {

  const [squares, setSquares] = useState<string[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState({
    O: 0,
    X: 0
  })

  useEffect(() => {
    if (xIsNext) {
      const computerMove = getComputerMove(squares);
      handleClick(computerMove as any);
    }
  }, [xIsNext, squares])



  // use press
  const handleClick = useMemo(() => (index: number) => {
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  },
    [squares]
  );

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      return null
    }
  }

  const getComputerMove = (squares: any[]) => {
    let bestScore = -Infinity;
    let move = null

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        squares[i] = "0";
        const score = miniMax(squares, false);
        squares[i] = null
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
  };

  const miniMax = (squares: any[], isMaximazing: boolean) => {
    const winner = calculateWinner(squares)
    if (winner == "O") {
      return 1
    }

    if (winner == "X") {
      return -1
    }

    if (squares.every((e) => e !== null)) {
      return 0
    }

    if (isMaximazing) {
      let bestScore = -Infinity

      for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
          squares[i] = "O";
          const score = miniMax(squares, false)
          squares[i] = null

          bestScore = Math.min(score, bestScore)
        }
      }

      return bestScore
    }

    else {
      let bestScore = Infinity;

      for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
          squares[i] = "X";
          const score = miniMax(squares, true)
          squares[i] = null

          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setGameOver(true)
      setScore((pre) => {
        return {
          ...pre,
          X: winner == "X" ? pre.X++ : pre.X,
          O: winner == "O" ? pre.O++ : pre.O,
        }
      })
    }
    else if (squares.every(e => e !== null)) {
      setGameOver(true)
    }
  }, [squares]);

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setGameOver(false)
    setXIsNext(true)
  }

  return (
    <React.Fragment>
      <GameComponent
        squares={squares}
        handlePress={handleClick}
        handleReset={resetGame}
        score={score}
        finish={{
          gameOver,
          text: calculateWinner(squares)
            ? `Winner ${calculateWinner(squares)}`
            : squares.every((e) => e !== null)
              ? "Draw"
              : ""
        }}
      />
    </React.Fragment>
  );
}

export default SingleComponent