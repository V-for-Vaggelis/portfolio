import React, { Component } from 'react';
import messages from '../dialogue.json';
import projects from '../projects.json';
import { Button, ButtonGroup } from 'react-bootstrap';
import Project from './Project.js'

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
    let projectToShow;
    projects[this.props.messageCount].rendered = true;
    this.setState((prevState) => ({
      commonGround: true,
      lastAnserYes: true,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "Yes", project: projects[this.props.messageCount]}])
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
          <section key={q.question} aria-label="dialogue container"><p className="me">{q.question}</p> <p className="user">{q.answer}</p>
          {(q.project) &&
            <div aria-label="Response to positive user input">
              <p className="me">Then I guess you will love this project:</p>
              <Project project={q.project}></Project>
            </div>
          }
        </section>
      ))
    }
    <p className="me">{this.showProperMessage()}</p>
    {(this.props.messageCount < 6 && this.state.dialogueActive) &&
      <ButtonGroup id="user-options">
        <hr></hr>
        <Button className="dialogue-button" onClick={() => {
            this.handleYes()
            this.props.nextQuestion()}}>Yes</Button>
          <Button className="dialogue-button" onClick={() => {
              this.handleNo()
              this.props.nextQuestion()}}>No</Button>
            <Button className="dialogue-button" onClick={() => this.terminateDialogue()}>Skip dialogue</Button>
          </ButtonGroup>
        }
        {(this.props.messageCount === 6 || !this.state.dialogueActive) &&
          <section id="end-interaction">
            {!this.state.dialogueActive && <p className="me">Straight to bussiness then, here is the rest of my work as a front-end developer!</p>
          }
          <section id="all-projects">
            {projects.map((p) => (
              (!p.rendered) &&
              <Project key={p.title} project={p}></Project>
            ))
          }
        </section>
      </section>
    }
  </section>
);
}
}

export default Dialogue;
