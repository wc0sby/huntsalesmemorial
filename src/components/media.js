import React, { Component } from 'react'

export default class Video extends Component{
  render(){
    return(
      <div style={{'position':'absolute', 'bottom': '50%', 'right': 40}}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/C79t9X4A3xc" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}