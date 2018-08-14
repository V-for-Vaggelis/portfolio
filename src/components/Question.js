import React, { Component } from 'react'
import avatar from '../my-avatar.png'
import { Button, ButtonGroup } from 'react-bootstrap';

function Question (props) {
  return (
    <section className="question" aria-label="question container">
    <section class="author-message" aria-label="author message">
      <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
      <p className="me">{props.showProperQuestion()}</p>
    </section>
    {(props.messageIndex < 6 && props.dialogueActive) &&
      <ButtonGroup id="user-options">
        <hr></hr>
        <Button className="dialogue-button" onClick={() => {
            props.handlePositive()
            props.showNext()}}>Yes</Button>
          <Button className="dialogue-button" onClick={() => {
              props.handleNegative()
              props.showNext()}}>No</Button>
            <Button className="skip-button" onClick={() => props.terminate()}>Skip dialogue</Button>
          </ButtonGroup>
        }
        {(!(props.messageIndex === 6) && !props.dialogueActive) &&
          <section class="author-message" aria-label="author message">
            <img className="avatar" src={avatar} alt="A small avatar of Evangelos Athanasakis"></img>
            <p className="me">Straight to bussiness then, here is the rest of my work as a front-end developer!</p>
          </section>}
    </section>
  )
}

export default Question
