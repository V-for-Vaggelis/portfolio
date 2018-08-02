import React, { Component } from 'react';
import messages from '../dialogue.json';
import { Button, ButtonGroup } from 'react-bootstrap';

class Dialogue extends Component {
  state = {
    previousQuestions: [],
    dialogueActive: true,
    lastAnserYes: false,
    commonGround: false
  }
  showProperMessage = () => {
    let question;
    (((this.props.messageCount === 2 || this.props.messageCount === 5 || this.props.messageCount === 6) && this.state.commonGround === false) ?
    question = messages[this.props.messageCount].allNegative :
    question = messages[this.props.messageCount].positive)
    return question;
  }
  terminateDialogue = () => {
    this.setState(() => ({
      dialogueActive: false
    }))
  }
  handleYes = () => {
    let message = this.showProperMessage()
    this.setState((prevState) => ({
      commonGround: true,
      lastAnserYes: true,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "Yes", project: "A project goes here"}])
    }))
  }
  handleNo = () => {
    let message = this.showProperMessage()
    this.setState((prevState) => ({
      lastAnserYes: false,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "No"}])
    }))
  }
  render() {
    return (
      <section id="dialogue">
        {this.state.previousQuestions.map((q) => (
          <section key={q.question}><span>{q.question}</span> <span>{q.answer}</span>
          {(q.project) &&
            <div>
              Then I guess you will love this project:
              <h2>{q.project}</h2>
            </div>
          }
        </section>
      ))
    }
      <p>{this.showProperMessage()}</p>
      {(this.props.messageCount < 6 && this.state.dialogueActive) &&
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
