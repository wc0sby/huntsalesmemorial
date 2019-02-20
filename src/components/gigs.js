import React, { Component } from 'react'
import GIG from './gigEntry'

export default class Gigs extends Component{

  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 100)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }


  renderGigs = (gigs) =>{
    return gigs.map((i,k)=>{
      return <GIG key={k} date={i.date} location={i.location}/>
    })
  }
  
  render(){
    return gigsArr.length>1 
    ?(
      <div style={styles.container} id={this.props.id} className={this.props.className}>
        <h1 style={{textAlign:'center'}}>GIGS</h1>
        <div style={styles.info}>
          <table style={styles.table}>
          <tbody>
            <tr>
            <th>Location</th>
            <th>Date</th>
            </tr>
            {this.renderGigs(gigsArr)}
          </tbody>
          </table>
        </div>
      </div>
    )
    :(
      <div style={styles.container}id={this.props.id} className={this.props.className}>
        <p>NO UPCOMING GIGS</p>
        <p>Check back later</p>
      </div>
    )
  }
}

const gigsArr = [
  // {date:'2/27/2019',location: 'Antones'},
  // {date:'2/27/2019',location: 'Antones'},
  // {date:'2/27/2019',location: 'Antones'}
]

const styles = {
  container:{
    margin: 'auto',
    width: '65%',
    background: 'rgba(0, 0, 0, 0.15)',
    maxHeight: 1000,
    overflow: 'auto',
  },
  info:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignContent: 'center'
  },
  infoHeader:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  table:{
    width: '75%',
    background: 'rgba(0, 0, 0, 0.25)',

  }
}