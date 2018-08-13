import React, { Component } from 'react';
import messages from '../dialogue.json';
import projects from '../projects.json';
import { Button, ButtonGroup } from 'react-bootstrap';
import Project from './Project.js'
import avatar from '../my-avatar.png'

class Dialogue extends Component {
  state = {
    previousQuestions: [],
    lastAnserYes: false,
    commonGround: false
  }

  // Responsible for showing a proper message to the user at each point, by checking some statements through the hardcoded dialogue of the json file
  showProperMessage = () => {
    let question;
    (((this.props.messageCount === 2 || this.props.messageCount === 5 || this.props.messageCount === 6) && this.state.commonGround === false) ?
    question = messages[this.props.messageCount].allNegative :
    question = messages[this.props.messageCount].positive)
    return question;
  }

  // Respons properly to a yes response by the user, by showing a message and a project card
  handleYes = () => {
    let message = this.showProperMessage();
    projects[this.props.messageCount].rendered = true;
    this.setState((prevState) => ({
      commonGround: true,
      lastAnserYes: true,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "Yes", project: projects[this.props.messageCount]}])
    }))
  }

  // Responds with a message to a negative user repsonse
  handleNo = () => {
    let message = this.showProperMessage();
    this.setState((prevState) => ({
      lastAnserYes: false,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "No"}])
    }))
  }

  render() {
    return (
      <section id="dialogue">
        {this.state.previousQuestions.map((q) => (
          <section key={q.question} aria-label="dialogue container"><section class="author-message" aria-label="author message">
            <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
            <p className="me">{q.question}</p>
          </section>
          <p className="user">{q.answer}</p>
          {(q.project) &&
            <section class="author-message" aria-label="author message">
              <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
              <p className="me">Then I guess you will love this project:</p>
              <Project project={q.project}></Project>
            </section>
          }
        </section>
      ))
    }
    <section class="author-message" aria-label="author message">
      <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
      <p className="me">{this.showProperMessage()}</p>
    </section>
    {(this.props.messageCount < 6 && this.props.isDialogueActive) &&
      <ButtonGroup id="user-options">
        <hr></hr>
        <Button className="dialogue-button" onClick={() => {
            this.handleYes()
            this.props.nextQuestion()}}>Yes</Button>
          <Button className="dialogue-button" onClick={() => {
              this.handleNo()
              this.props.nextQuestion()}}>No</Button>
            <Button className="skip-button" onClick={() => this.props.endDialogue()}>Skip dialogue</Button>
          </ButtonGroup>
        }
        {(!(this.props.messageCount === 6) && !this.props.isDialogueActive) &&
          <section class="author-message" aria-label="author message">
            <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
            <p className="me">Straight to bussiness then, here is the rest of my work as a front-end developer!</p>
          </section>}
        </section>
      );
    }
  }

  export default Dialogue;
