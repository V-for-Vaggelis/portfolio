import React, { Component } from 'react'
import avatar from '../my-avatar.png'
import { Button, ButtonGroup } from 'react-bootstrap';

function Question (props) {
  if (props.loadingAnimation) {
    return (
      <section className="author-message" aria-label="author message">
        <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
        <p id="replying">
          <span className="bounceThird">&#8226;</span>
          <span className="bounceSecond">&#8226;</span>
          <span className="bounceFirst">&#8226;</span>
        </p>
      </section>
    )
  }
  else {
    return (
      <section className="question" aria-label="question container">
        <section className="author-message" aria-label="author message">
          <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
          <p className="me">{props.showProperQuestion()}</p>
        </section>
        {(props.messageIndex < 6 && props.dialogueActive) &&
          <ButtonGroup id="user-options">
            <hr></hr>
            <Button className="dialogue-button" id="yes" onClick={() => {
                props.handlePositive()
                props.startAnimation()
                setTimeout(function() {
                  props.stopAnimation()
                  props.createProject()
                  props.startAnimation()
                }, 3000)
                setTimeout(function() {
                  props.stopAnimation()
                  props.showNext()}, 6000)}}>Yes</Button>
                <Button className="dialogue-button" id="no" onClick={() => {
                    props.handleNegative()
                    props.startAnimation()
                    setTimeout(function() {
                      props.stopAnimation()
                      props.showNext()}, 3000)
                    }}>No</Button>
                    <Button className="skip-button" onClick={() => props.terminate()}>Skip dialogue</Button>
                  </ButtonGroup>
                }
                {(!(props.messageIndex === 6) && !props.dialogueActive) &&
                  <section className="author-message" aria-label="author message">
                    <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
                    <p className="me">Straight to bussiness then, here is the rest of my work as a front-end developer!</p>
                  </section>}
                </section>
              )
            }
          }

          export default Question
