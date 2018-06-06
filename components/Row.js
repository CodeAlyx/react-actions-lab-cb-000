'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    <tr className='row'>
      {this.props.rowCells.map(cell => <Cell cellData={cell} />)}
    </tr>
  }
}
