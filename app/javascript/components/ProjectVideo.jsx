import React from 'react'

const ProjectVideo = (props) => (
  <video width="600" height="600" controls className="projectimg">
    <source src={`/images/${props.image}`} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
)

export default ProjectVideo