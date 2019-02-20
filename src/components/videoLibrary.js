import React, { Component } from 'react'
import Video from './video'

export default class Videos extends Component{

  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 300)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }

  renderVideos=(videosArr)=>{
    return videosArr.map((i,k)=>{
      return <Video link={i} key={k} title={k} />
    })
  }
  
  render(){
    return(
      <div style={styles.container} className={this.props.className} id={this.props.id}>
        {this.renderVideos(videoURLArr)}
      </div>
    )
  }
}
const videoURLArr = [
  'https://www.youtube.com/embed/PL6FBryVA3I',
  'https://www.youtube.com/embed/CvBU2QODc7g',
  'https://www.youtube.com/embed/CJoGY8PUepU',
  'https://www.youtube.com/embed/2AQsCJ_yKLg',
  'https://www.youtube.com/embed/C79t9X4A3xc',
]

const styles = {
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: 'auto',
    width: '80%',
    background: 'rgba(0, 0, 0, 0.15)',
    maxHeight: 1000,
    overflow: 'auto',
  }
}