import React, { Component } from 'react';
import udacity from './udacity.png';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import portrait from './graduation.png'
import Dialogue from './components/Dialogue.js'
import projects from './projects.json';
import Project from './components/Project.js'

class App extends Component {
  state = {
    messageIndex: 0,
    dialogueActive: true
  }

  // Signals end of messages in order to show the remaining projects to the user
  terminateDialogue = () => {
    this.setState(() => ({
      dialogueActive: false
    }))
  }

  // Called when user interacts and updates state to show the next message
  updateMessageIndex = () => {
    if (this.state.messageIndex < 5) {
      this.setState((prevState) => ({
        messageIndex: prevState.messageIndex + 1
      }))
    }
    else {
      this.setState((prevState) => ({
        messageIndex: prevState.messageIndex + 1,
        dialogueActive: false
      }))
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <img className="udacity-logo" src={udacity} alt=""></img>
          <div id="header-container">
            <h1 id="name">Evangelos Athanasakis</h1>
            <h2 id="titles">Front end developer | Physicist</h2>
          </div>
        </header>
        <hr></hr>
        <main>
          <Dialogue messageCount={this.state.messageIndex} nextQuestion={this.updateMessageIndex} isDialogueActive={this.state.dialogueActive} endDialogue={this.terminateDialogue}/>
          {!this.state.dialogueActive &&
            <section id="all-projects">
              {projects.map((p) => (
                (!p.rendered) &&
                <Project key={p.title} project={p}></Project>
              ))
            }
          </section>}
          <hr></hr>
        </main>
        <footer>
          <img className="my-photo" src={portrait} alt="Evangelos Athanasakis sitting on a desk and holding a pen."></img>
          <div id="media-container">
          <a className="linkedin" href="https://www.linkedin.com/in/evangelos-athanasakis/"><FontAwesomeIcon className="icon-media" icon={faLinkedin} /></a>
          <a className="github" href="https://github.com/V-for-Vaggelis"><FontAwesomeIcon className="icon-media" icon={faGithub} /></a>
          </div>
          <a className="mail" href="mailto:vaggelis.atha1993@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} />vaggelis.atha1993@gmail.com </a>
        </footer>
      </div>
    );
  }
}

export default App;
