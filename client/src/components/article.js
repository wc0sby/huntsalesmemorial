import React, { Component } from 'react'

export default class article extends Component{
  render(){
    return(
      // <div className='about-me-background'>
      <article className='about-me'>
        <p>
          {this.props.text}
        </p>
      </article>
      // </div>
    )
  }
}