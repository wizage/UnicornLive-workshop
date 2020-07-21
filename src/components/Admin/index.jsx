/* eslint no-param-reassign: ["error", { "props": false }] */
import React, { Component } from 'react';
import './index.css';
import JsonTable from 'ts-react-json-table';
import Popup from 'react-popup';
/* Location 1 */
import { withAuthenticator } from 'aws-amplify-react';
/* Location 3 */
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestion, updateQuestion } from '../../graphql/mutations';
import logo from './logo.svg';
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
    const question = {
      input: {
        question: rowData.Question,
        answers: rowData.Answers,
      }
    };
    API.graphql(graphqlOperation(createQuestion, question)).then((result) => {
      rowData.id = result.data.createQuestion.id;
      console.log(result.data.createQuestion);
    });
  }

  handleAnswerClick = (rowData) => {
    /* Location 5 */
    if (rowData.id != null) {
      const question = {
        input: {
          id: rowData.id,
          answerId: rowData.Answer,
        }
      };
      API.graphql(graphqlOperation(updateQuestion, question)).then((result) => {
        rowData.id = null;
        console.log(result.data.updateQuestion);
      });
    } else {
      console.log('Error: No question id found');
      Popup.alert('Error: You have not submitted a question.')
    }
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
export default withAuthenticator(Content);
