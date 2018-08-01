import React, { Component } from 'react';
import messages from '../dialogue.json';
import { Button, ButtonGroup } from 'react-bootstrap';

class Dialogue extends Component {
  state = {
    previousDialogue: [],
    dialogueActive: true
  }
  terminateDialogue = () => {
    this.setState(() => ({
      dialogueActive: false
    }))
  }
  render() {
    return (
      <div id="dialogue">
      <p>{messages[this.props.messageCount].positive}</p>
      {this.props.messageCount < 6 &&
        <ButtonGroup>
        <Button onClick={() => this.props.nextQuestion()}>Yes</Button>
        <Button onClick={() => this.props.nextQuestion()}>No</Button>
        <Button onClick={() => this.terminateDialogue()}>Skip dialogue</Button>
        </ButtonGroup>
      }
      {!this.state.dialogueActive &&
        <section>Straight to the point then, here is all my work as a front-end developer!
        <h1>Projects go here</h1>
        </section>

      }
        </div>
      );
    }
  }

  export default Dialogue;
