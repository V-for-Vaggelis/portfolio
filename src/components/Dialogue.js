import React, { Component } from 'react';
import messages from '../dialogue.json';
import { Button } from 'react-bootstrap';

class Dialogue extends Component {
  state = {
    previousDialogue: [],
    messageCount: 0
  }
  render() {
    return (
      <div id="dialogue">
      <p>{messages[this.state.messageCount].positive}</p>
      </div>
    );
  }
}

export default Dialogue;
