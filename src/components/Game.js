import React, { Component }  from 'react';
import {Board} from './Board'
import * as cellValue from '../cellValue';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(cellValue.EMPTY),
    };
  }

  determineMark() {
    let numberOfX = this.countMark(cellValue.X);
    let numberOfO = this.countMark(cellValue.O);
    return (numberOfX > numberOfO) ? cellValue.O : cellValue.X
  }

  countMark(mark) {
    let count = 0;
    let currentGrid = this.state.grid;
    currentGrid.forEach(function(cell) {
      if(cell === mark)
        count++;
    });
    return count;
  }

  handleClick(gridIndex) {
    const grid = this.state.grid.slice();
    grid[gridIndex] = this.determineMark();
    this.setState({grid: grid});
  }

  render() {
    return (
      <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      <Board
      cells = {this.state.grid}
      handleClick = {gridIndex => this.handleClick(gridIndex)} />
      </div>
    );
  }
};
