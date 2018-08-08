import React, { Component } from 'react'

function Project (props) {
  return (
    <section className="project-container" aria-label="Container of a project">
    <h3><a className="project-link" href={props.project.url}>{props.project.title}</a></h3>
    <p><em>Desctiption:</em>  {props.project.description}</p>
    <p><em>Skills used: </em></p>
    <ul className="skillList">{props.project.skillsUsed.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    </section>
  )
}

export default Project
