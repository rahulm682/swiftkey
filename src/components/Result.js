import React from 'react'

const Result = ({game}) => {
  return (
    <div>
      <div>Characters per minute: {game.wpm}</div>
      <div>Score: {game.score}</div>
      <div>Incorrect: {game.incorrect}</div>
      <div>Total: {game.total}</div>
    </div>
  )
}

export default Result
