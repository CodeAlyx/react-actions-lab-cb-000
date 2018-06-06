'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    <table className='table'>
      <tbody>
        {this.props.table.map(row => <Row rowCells={row} />)}
      </tbody>
    </table>
  }
}
