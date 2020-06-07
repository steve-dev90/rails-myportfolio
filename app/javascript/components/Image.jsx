import React from 'react'
import ImageLoader from 'react-load-image'

function smallImagePath(image) {
  return `${image.slice(0,-4)}-small.${image.slice(-3)}`
}

const Image = (props) => (
  <React.Fragment>
    <ImageLoader {...props} className={props.imageDivStyle}>
      <img className={props.imageStyle} />
      <div></div>
      <img src={ smallImagePath(props.src) } style={ {filter: 'blur(20px)'} } className={props.imageStyle} />
    </ImageLoader>
  </React.Fragment>
)
export default Image;