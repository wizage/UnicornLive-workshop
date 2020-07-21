/* eslint no-param-reassign: ["error", { "props": false }] */
import React, { Component } from 'react';
import './index.css';
import JsonTable from 'ts-react-json-table';
import Popup from 'react-popup';
/* Location 1 */

/* Location 3 */

import myJson from './questions.json';

const columns = [{
  key: 'Question',
  label: 'Questions:',
}, {
  key: 'button1',
  label: ' ',
  cell: () => <button type="button">Post Question</button>,
}, {
  key: 'button2',
  label: ' ',
  cell: () => <button type="button">Post Answer</button>,
}];

class Content extends Component {
  tableSettings = {
    header: false,
  }

  handleQuestionClick = (rowData) => {
    /* Location 4 */
    
  }

  handleAnswerClick = (rowData) => {
    /* Location 5 */
    
  }

  onClickCell = (event, columnName, rowData) => {
    if (columnName === 'button1') {
      this.handleQuestionClick(rowData);
    } else if (columnName === 'button2') {
      this.handleAnswerClick(rowData);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Unicorn Live</h1>
        </header>
        <JsonTable rows={myJson.Questions} columns={columns} settings={this.tableSettings} onClickCell={this.onClickCell} className="tabelsa" />
      </div>
    );
  }
}

/* Location 2 */
export default Content;
