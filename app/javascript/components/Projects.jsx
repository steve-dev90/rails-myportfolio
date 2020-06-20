import React from 'react'
import Project from './Project'
// import {getProjects} from '../actions/projects'

class Projects extends React.Component {

  state = { projects: [] }

  componentDidMount() {
    console.log('BIFG')
    window.scrollTo(0, 0)
    fetch('/api/v1/projects').
      then((response) => response.json()).
      then((projects) =>  this.setState({ projects }))
  }

  render() {
    console.log(this.state.projects)
    return (
      <React.Fragment>
        <section className="Projects section">
          <div className="container">
            <div className="columns is-centered is-multiline">
              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">Projects</h2>
              </div>
              {this.state.projects
                .filter(project => !project.old_project)
                .map(project => <Project key={project.id} project={project}/>)}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Projects