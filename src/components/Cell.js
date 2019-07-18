import React from 'react';
import '../Game.css';

export function Cell(props) {
  return <button
    className="button"
    onClick={() => props.onClick()}>
    {props.cellLabel}
    </button>
}
