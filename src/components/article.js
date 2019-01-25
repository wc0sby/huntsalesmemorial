import React, { Component } from 'react'

export default class article extends Component{
  render(){

    const styles = {
      main:{
        display: 'flex'
      },
      header:{
        marginLeft: '2%',
        alignSelf: 'center'
      },
      link:{
        textDecoration: 'none'
      },

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
      <a style={styles.link} href={this.props.srcLink}><span style={{color:'grey', alignSelf:'flex-end'}}>Read More</span></a>
      </article>
      // </div>
    )
  }
}