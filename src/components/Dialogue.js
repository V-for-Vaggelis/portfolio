import React, { Component } from 'react';
import messages from '../dialogue.json';
import { Button, ButtonGroup } from 'react-bootstrap';

class Dialogue extends Component {
  state = {
    previousDialogue: []
  }
  render() {
    return (
      <div id="dialogue">
      <p>{messages[this.props.messageCount].positive}</p>
      {this.props.messageCount < 6 &&
        <ButtonGroup>
        <Button onClick={() => this.props.nextQuestion()}>Yes</Button>
        <Button onClick={() => this.props.nextQuestion()}>No</Button>
        <Button onClick={() => this.props.nextQuestion()}>Skip dialogue</Button>
        </ButtonGroup>
      }
      </div>
    );
  }
}

export default Dialogue;
