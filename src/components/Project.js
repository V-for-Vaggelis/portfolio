import React, { Component } from 'react'

function Project (props) {
  return (
    <section className="project-container">
    <h3><a className="project-link" href={props.project.url}>{props.project.title}</a></h3>
    <p><em>Desctiption:</em>  {props.project.description}</p>
    <p><em>Skills used:</em>  {props.project.skillsUsed}</p>
    </section>
  )
}

export default Project
