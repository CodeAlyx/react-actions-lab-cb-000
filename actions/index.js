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

function changeCell (rowIndex, columnIndex, ev) {
}

function focusCell (rowIndex, columnIndex) {
}

function blurCell () {
}

function removeRow (ev) {
}

function removeColumn (ev) {
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
