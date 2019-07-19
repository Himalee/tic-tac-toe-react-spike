import React, { Component }  from 'react';
import {Board} from './Board'
import * as CellValue from '../CellValue';
import * as GameResult from '../GameResult';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(CellValue.EMPTY),
      isThereAWinner: false,
      isBoardFull: false
    };
  }

  isThereAWinner(grid) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let winnerFound = false;
    winningLines.forEach(function(line) {
      const [a, b, c] = line;
      let potentialWinningLine = [grid[a], grid[b], grid[c]]
      if (potentialWinningLine.every( cell => cell === potentialWinningLine[0] && cell !== CellValue.EMPTY))
        winnerFound = true;
      });
    return winnerFound;
    }

  determineMark() {
    let numberOfX = this.countMark(CellValue.X, this.state.grid);
    let numberOfO = this.countMark(CellValue.O, this.state.grid);
    return (numberOfX > numberOfO) ? CellValue.O : CellValue.X
  }

  countMark(mark, grid) {
    let count = 0;
    let currentGrid = grid;
    currentGrid.forEach(function(cell) {
      if(cell === mark)
        count++;
    });
    return count;
  }

  isBoardFull(grid) {
    let numberOfEmptyCells = this.countMark(CellValue.EMPTY, grid);
    return (numberOfEmptyCells === 0) ? true : false
  }

  handleClick(gridIndex) {
    const grid = this.state.grid.slice();
    grid[gridIndex] = this.determineMark();
    this.setState({grid: grid});
    this.setState({isThereAWinner: this.isThereAWinner(grid), isBoardFull: this.isBoardFull(grid)});
  }

  render() {
    let status;
    const isThereAWinner = this.state.isThereAWinner;
    const isBoardFull = this.state.isBoardFull;
    if (isThereAWinner) {
      status = GameResult.WINNER;
    } else if (isBoardFull) {
      status = GameResult.DRAW;
    } else {
      status = GameResult.CONTINUE_PLAYING;
    }
    return (
      <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      <Board
      cells = {this.state.grid}
      handleClick = {gridIndex => this.handleClick(gridIndex)} />
      <h2>{status}</h2>
      </div>
    );
  }
};
