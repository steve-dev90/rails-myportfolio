import React from 'react'
import { Link } from 'react-scroll'
import Image from './Image'

class Hero extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="columns is-gapless">

        <div className="column is-two-fifths is-hidden-mobile has-background-light heroimg-container">
          <Image src="sketch3.jpg" imageStyle="heroimg" />
        </div>

        <div className="column is-three-fifths">
          <div className="hero is-fullheight is-light">
            <div className="hero-body ">
              <div className="container">
                <h2 className="is-size-1 has-text-weight-bold has-text-info">
                  Steve Torrens
                </h2>
                <h1 className="is-size-3 has-text-weight-semibold has-text-info">
                  Full Stack Software Developer
                </h1>
                <div className="has-text-centered hero-arrow has-text-link">
                  <Link activeClass="active" className="Who" to="Who" offset={-60} spy={true} smooth={true} duration={600} >
                    <i className="fa fa-angle-double-down"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </React.Fragment>
    )}
}

export default Hero