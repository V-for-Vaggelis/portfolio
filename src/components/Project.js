import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

function Project (props) {
  return (
    <section className="project-container" aria-label="Container of a project">
    <h3>{props.project.title}</h3>
    <Image className="project-thumb" responsive src={props.project.thumbnail.src} alt={props.project.thumbnail.alt}></Image>
    <p>{props.project.description}</p>
    <p><em>Skills used: </em></p>
    <ul className="skillList">{props.project.skillsUsed.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    <p><em>Github link: </em><a className="project-link" href={props.project.url}>{props.project.title}</a></p>
    </section>
  )
}

export default Project
