import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Project from './Projects'
import About from './About'
// import Contact from './Contact'
import Portfolio from './Portfolio'
import Nav from './Nav'
import Footer from './Footer'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Portfolio}/>
      <Route exact path='/projects' component={Project} />
      <Route exact path='/about' component={About} />
      {/* <Route exact path='/contact' component={Contact} /> */}
      <Footer />
    </div>
  </Router>
)

export default App
