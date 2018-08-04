import React, { Component } from 'react'

function Project (props) {
  return (
    <section className="project-container">
    <h3><a href={props.project.link}>{props.project.title}</a></h3>
    <p>{props.project.description}</p>
    <p><em>Skills used:</em> {props.project.skillsUsed}</p></section>
  )
}

export default Project
