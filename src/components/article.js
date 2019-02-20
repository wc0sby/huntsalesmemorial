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
        alignSelf: 'flex-end',
        marginBottom: "2%",
        background: '#ff9901',
        color: 'white',
        textAlign: 'center',
        width: '30%',
        textDecoration: 'none',
        borderRadius: 6,
        zIndex: 10,
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
      <a style={styles.link} href={this.props.srcLink}><span>Read More</span></a>
      </article>
      // </div>
    )
  }
}