import React, { Component } from 'react'

export default class article extends Component{
  render(){

    const styles = {
      main:{
        display: 'flex'
      },
      header:{
        marginLeft: '2%'
      }
    }

    return(
      // <div className='about-me-background'>
      <article className='about-me'>
      <div style={styles.main}>
        <img src={this.props.imgLink} alt="" style={{ width: "35%", height: '35%' }}/>
        <div style={styles.header}>
          <h1>
          {this.props.header}
          </h1>
          <cite>{this.props.source}</cite>
        </div>
      </div>
      <p>{this.props.content}</p>
      </article>
      // </div>
    )
  }
}