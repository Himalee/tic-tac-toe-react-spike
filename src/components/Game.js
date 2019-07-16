import React, { Component }  from 'react';
import Cell from './Cell'

class Game extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      <Cell />
      <Cell />
      <Cell />
      <br />
      <Cell />
      <Cell />
      <Cell />
      <br />
      <Cell />
      <Cell />
      <Cell />
      </div>
    );
  }
};

export default Game;
