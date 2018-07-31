import React, { Component } from 'react';
import udacity from './udacity.png';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


// library.add(faLinkedin, faEnvelope)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img className="udacity-logo" src={udacity} alt=""></img>
          <h1 id="name">Evangelos Athanasakis</h1>
          <h2 id="knowledge">Front end developer | Physicist</h2>
        </header>
        <footer>
          <FontAwesomeIcon icon={faLinkedin} />
          <a className="contact-info" href="https://www.linkedin.com/in/evangelos-athanasakis/">linkedin </a>
          <FontAwesomeIcon icon={faGithub} />
          <a className="contact-info" href="https://github.com/V-for-Vaggelis">github </a>
          <FontAwesomeIcon icon={faEnvelope} />
          <a className="contact-info" href="mailto:vaggelis.atha1993@gmail.com">vaggelis.atha1993@gmail.com </a>
        </footer>
      </div>
      );
    }
  }

  export default App;
