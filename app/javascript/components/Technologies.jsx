import React from 'react'
import Image from './Image'

const techFileNames = ["ruby", "javascript", "rails", "react", "redux", "jquery",
  "node", "html5", "css3", "bulma", "git", "heroku"]

const Technologies = (props) => (

  <React.Fragment>
    <div className="has-text-centered">
          {techFileNames.map((techFileName, index) =>
            <Image src={`/technologies/${techFileName}.png`} imageStyle="tech-image"
              imageDivStyle="techimg-container" key={index}/>
          )}
    </div>
  </React.Fragment>
)

export default Technologies