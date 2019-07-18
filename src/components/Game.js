import React, { Component }  from 'react';
import {Cell} from './Cell'
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
    if ( numberOfX > numberOfO) {
      return cellValue.O
    } else {
        return cellValue.X
    }
  }

  countMark(mark) {
    let count = 0;
    let currentGrid = this.state.grid;
    for(let i = 0; i < currentGrid.length; ++i){
      if(currentGrid[i] === mark)
        count++;
    }
    return count;
  }

  handleClick(gridIndex) {
    const grid = this.state.grid.slice();
    grid[gridIndex] = this.determineMark();
    this.setState({grid: grid});
  }

  renderCell(gridIndex) {
    return <Cell
    cellLabel={this.state.grid[gridIndex]}
    onClick={() => this.handleClick(gridIndex)} />
  }

  render() {
    return (
      <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      {this.renderCell(0)}
      {this.renderCell(1)}
      {this.renderCell(2)}
      <br />
      {this.renderCell(3)}
      {this.renderCell(4)}
      {this.renderCell(5)}
      <br />
      {this.renderCell(6)}
      {this.renderCell(7)}
      {this.renderCell(8)}
      </div>
    );
  }
};
