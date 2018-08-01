import React, { Component } from 'react';
import messages from '../dialogue.json';
import { Button, ButtonGroup } from 'react-bootstrap';

class Dialogue extends Component {
  state = {
    previousDialogue: [],
    dialogueActive: true,
    lastAnserYes: false
  }
  terminateDialogue = () => {
    this.setState(() => ({
      dialogueActive: false
    }))
  }
  handleYes = () => {
    this.setState(() => ({
      lastAnserYes: true
    }))
  }
  handleNo = () => {
    this.setState(() => ({
      lastAnserYes: false
    }))
  }
  render() {
    return (
      <section id="dialogue">
      <p>{messages[this.props.messageCount].positive}</p>
      {this.props.messageCount < 6 &&
        <ButtonGroup>
        <Button onClick={() => {
          this.handleYes()
          this.props.nextQuestion()}}>Yes</Button>
        <Button onClick={() => {
          this.handleNo()
          this.props.nextQuestion()}}>No</Button>
        <Button onClick={() => this.terminateDialogue()}>Skip dialogue</Button>
        </ButtonGroup>
      }
      {this.state.lastAnserYes &&
        <section id="single-project">
        Then I guess you will love this project:
        <h2>A single project goes here</h2>
        </section>
      }
      {!this.state.dialogueActive &&
        <section id="all-projects">Straight to the point then, here is all my work as a front-end developer!
        <h1>Projects go here</h1>
        </section>
      }
      </section>
    );
  }
}

export default Dialogue;
