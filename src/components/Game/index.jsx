import React, { Component } from 'react';
/* Location 8 */

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
    /* Location 11 */

  }

  listenForAnswers = () => {
    const self = this;
    /* Location 12 */

  }

  callbackFunction = (childData) => {
    /* Location 14 */
  
  }

  render() {
    /* Location 9 */
    const url = '';
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
