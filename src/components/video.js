import React, { Component } from 'react'

export default class Video extends Component{
  render(){
    return(
      <div style={styles.container}>
        <iframe 
          title={this.props.title}
          width={560*.8}
          height={315*.8} 
          src={this.props.link} 
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '1% 2%'
  }
}