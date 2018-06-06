'use strict';

function addColumn (ev) {
  ev.preventDefault();
  this.setState({
    table: this.state.table.map(row => [...row, ''])
  });
}

function addRow (ev) {
  ev.preventDefault();
  length = this.state.table[0].length
  this.setState({
    table: ...this.state.table.push(new Array(length))
  });
}

function changeCell (ctx, rowIndex, columnIndex, ev) {
}

function focusCell (ctx, rowIndex, columnIndex) {
}

function blurCell (ctx) {
}

function removeRow (ctx, ev) {
}

function removeColumn (ctx, ev) {
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
