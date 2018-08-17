import React, { Component } from 'react';
import messages from '../dialogue.json';
import projects from '../projects.json';
import Project from './Project.js'
import avatar from '../my-avatar.png'
import Question from './Question.js'
import Delay from 'react-delay'

class Dialogue extends Component {
  state = {
    previousQuestions: [],
    lastAnserYes: false,
    commonGround: false,
    messageLoading: false
  }

  // Autoscrolls the user to the newly rendered dialogue messages
  // After loading messagge effect autoscroll is bugged and needs fix
  /*
  componentDidUpdate() {
    let targets;
    if (this.state.lastAnserYes || !this.props.isDialogueActive) {
      targets = document.getElementsByClassName("avatar");
    }
    else {
      targets = document.getElementsByClassName("user");
    }
    let targetsArray = [...targets];
    if (targetsArray && targetsArray.length > 0) {
      let index;
      if (this.state.lastAnserYes) {
        index = targetsArray.length - 2;
      }
      else {
        index = targetsArray.length - 1;
      }
      let lastTarget = targetsArray[index];
      lastTarget.scrollIntoView();
    }
  }/*


  // Fires a loading message animation
  activateLoadingAnimation = () => {
    this.setState({messageLoading: true})
  }

  // Stops the loading message animation
  disableLoadingAnimation = () => {
    this.setState({messageLoading: false})
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

    this.setState((prevState) => ({
      commonGround: true,
      lastAnserYes: true,
      previousQuestions: prevState.previousQuestions.concat([{question: message, answer: "Yes", index: this.props.messageCount}])
    }))
  }

  renderProject = () => {
    projects[this.props.messageCount].rendered = true;
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
          <section key={q.question} aria-label="dialogue container"><section className="author-message" aria-label="author message">
            <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
            <p className="me">{q.question}</p>
          </section>
          <p className="user">{q.answer}</p>
          {(q.answer === "Yes" && projects[q.index].rendered) &&
            <section className="author-message" aria-label="author message">
              <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
              <p className="me">Then I guess you will love this project:</p>
              <Project project={projects[q.index]}></Project>
            </section>
          }
        </section>
      ))
    }
    <Delay wait={2000}>
      <Question showProperQuestion={this.showProperMessage} messageIndex={this.props.messageCount} dialogueActive={this.props.isDialogueActive}
        handlePositive={this.handleYes} handleNegative={this.handleNo} showNext={this.props.nextQuestion} terminate={this.props.endDialogue}
        loadingAnimation={this.state.messageLoading} startAnimation={this.activateLoadingAnimation} stopAnimation={this.disableLoadingAnimation} createProject={this.renderProject}
        >
      </Question>
    </Delay>
  </section>
);
}
}

export default Dialogue;
