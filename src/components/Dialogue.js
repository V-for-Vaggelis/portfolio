import React, { Component } from 'react';
import messages from '../dialogue.json';
import projects from '../projects.json';
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
          <section key={q.question}><p className="me">{q.question}</p> <p className="user">{q.answer}</p>
          {(q.project) &&
            <div>
              <p className="me">Then I guess you will love this project:</p>
              <h2>{q.project.title}</h2>
            </div>
          }
        </section>
      ))
    }
    <p className="me">{this.showProperMessage()}</p>
    {(this.props.messageCount < 6 && this.state.dialogueActive) &&
      <ButtonGroup id="user-options">
        <Button onClick={() => {
            this.handleYes()
            this.props.nextQuestion()}}>Yes</Button>
          <Button onClick={() => {
              this.handleNo()
              this.props.nextQuestion()}}>No</Button>
            <Button onClick={() => this.terminateDialogue()}>Skip dialogue</Button>
          </ButtonGroup>
        }
        {(this.props.messageCount === 6 || !this.state.dialogueActive) &&
          <section id="all-projects">
            {!this.state.dialogueActive && <p className="me">Straight to the point then, here is the rest of my work as a front-end developer!</p>
          }
          {projects.map((p) => (
            (!p.rendered) &&
            <h1>{p.title}</h1>
          ))
        }
      </section>
    }
  </section>
);
}
}

export default Dialogue;
