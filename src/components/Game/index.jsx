import React, { Component } from 'react';
/* Location 8 */
import {Auth, API, graphqLlOperation, graphqlOperation } from 'aws-amplify';
import { onCreateQuestion, onUpdateQuestion } from '../../graphql/subscriptions';
/* Location 10 */
/* Location 15 */
import Video from '../Video';
import Modal from '../Modal';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      drawInfo: {},
    };
  }

  componentDidMount() {
    this.listenForQuestions();
    this.listenForAnswers();
    this.setupClient();
  }

  setupClient = () => {
    /* Location 16 */
  }

  listenForQuestions = () => {
    const self = this;
    API.graphql(graphqlOperation(onCreateQuestion)).subscribe({
      next: (data) => {
        self.setState({
          drawInfo: data.value.data,
        });
        console.log(data);
      }
    });
  }

  listenForAnswers = () => {
    const self = this;
    API.graphql(graphqlOperation(onUpdateQuestion)).subscribe({
      next: (data) => {
        self.setState({
          drawInfo: data.value.data,
          modalVisible:true,
        });
        console.log(data);
      }
    });
  }

  callbackFunction = (childData) => {
    /* Location 14 */
  }

  render() {
    /* Location 9 */
    const url = 'https://d3bfdc284f8e.us-west-2.playback.live-video.net/api/video/v1/us-west-2.533122240946.channel.apamgwmeFmRw.m3u8';
    const { modalVisible, drawInfo } = this.state;
    return (
      <div className="game-container">
        <Video 
          controls
          techOrder={['AmazonIVS']}
          src={url}
          bigPlayButton={false}
          parentCallback={this.callbackFunction}
          autoplay
        />
        <Modal className={modalVisible ? 'show' : 'hidden'} drawInfo={drawInfo} />
      </div>
    );
  }
}

export default Game;
