import React, { Component }  from 'react';
import {Cell} from './Cell'

export class Board extends Component {
  renderCell(gridIndex) {
    return <Cell
    cellLabel={this.props.cells[gridIndex]}
    onClick={() => this.props.handleClick(gridIndex)} />
  }

  render() {
    return (
      <div>
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
}
