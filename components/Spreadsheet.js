'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      table: [[null]],
      focused: null,
    };
    
    this.addColumn = () => addColumn(this)
    this.addRow = () => addRow(this)
  }

  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.addColumn}>Add Column</button>
          {' '}
          <button>Add Row</button>
          {' '}
          <button>Remove Column</button>
          {' '}
          <button>Remove Row</button>
        </div>

        <Table table={this.state.table} />

        <div className='spreadsheet__focused'>
          {this.state.focus}
        </div>
      </div>
    );
  }
}
