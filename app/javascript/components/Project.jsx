import React from 'react'
import ProjectVideo from './ProjectVideo'
import ProjectImage from './ProjectImage'

const Project = (props) => (

  <React.Fragment>
    <div className="column is-8">
      <div className="content is-size-6 is-size-6-mobile">
        <h3 className="title is-4 has-text-centered">{props.project.title}</h3>

        <div className="has-text-centered ">
          {props.project.image.slice(-3) == 'mp4' ?
            <ProjectVideo image = {props.project.image} /> :
            <ProjectImage image = {props.project.image} />
           }
        </div>

        {props.project.copy.map((copy, index) => {
          return <p className="has-text-justified has-text-left-mobile" key={index}>{copy.para}</p>
        })}
      </div>
    </div>
  </React.Fragment>
)

export default Project

