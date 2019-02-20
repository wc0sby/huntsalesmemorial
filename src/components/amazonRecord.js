import React, { Component } from 'react'

export default class Record extends Component{
  render(){
    return(
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={this.props.imageURL} alt="" style={styles.image} />
        </div>
        <div>
          <p style={styles.desc}>{`${this.props.title} - ${this.props.format}`}</p>
          <p style={styles.subdesc}>{`* ${this.props.subtitle}`}</p>
        </div>
        <a href={this.props.amazonURL} style={styles.button}>Buy Now</a>
      
      </div>
    )
  }
}

const styles = {
  container: {
    // width: '70%',
    display:'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: '1% 2%'
  },
  button: {
    alignSelf: 'center',
    background: '#ff9901',
    color: 'white',
    textAlign: 'center',
    width: '30%',
    textDecoration: 'none',
    borderRadius: 6,
    zIndex: 10,
  },
  desc: {
    padding: '2%',
    
  },
  subdesc: {
    padding: '4%',
    fontSize: '1.5vh'
  },
  imageContainer: {
    width: '50%',
    alignSelf: 'center',

    // margin: 'auto'
    // height: '50%'
  },
  image: {
    width: '100%'
  }
}