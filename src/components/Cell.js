import React from 'react';
import '../Game.css';

export class Cell extends React.Component {
  render() {
    return (
      <button
        className="button"
        onClick={() => this.props.onClick()}>
        {this.props.cellLabel}
      </button>
    );
  }
}
