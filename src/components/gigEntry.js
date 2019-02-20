import React, { Component } from 'react'

export default class GigEntry extends Component{
  render(){
    return(
      <tr style={styles.content}>
        <td>{this.props.location}</td>
        <td>{this.props.date}</td>
      </tr>
    )
  }
}

const styles = {
  content: {
    textAlign: 'center'
  }
}

