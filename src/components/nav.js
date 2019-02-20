import React, { Component } from 'react'
import '../assets/THSM-Logo2.png'

export default class Nav extends Component{

  renderLinks=(linkTextArr)=>{
    return (
      linkTextArr.map((i,k)=>{
      return (<a 
          key={k} 
          href='#' 
          style={{'textDecoration':'none', 'color': 'white', 'padding':'10% 0', 'paddingLeft':'5%'}}>
            <div 
              className={`${i.class}`} 
              onClick={(e)=>this.props.action(e,i.name)} >
              {i.name}
            </div>
        </a>
       )
      })
    )
  }

  render(){
    const { links } = this.props
    const styles = {
      container:{
        'alignSelf': 'flex-start',
        'width': '12%',
      },
      main:{
        'fontFamily': `Didact Gothic, sans-serf`,
        'fontSize': '1.45em',
        'width': '12%',
        'height': '100%',
        'background': 'rgba(0, 0, 0, 0.15)',
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'fixed',
        'alignSelf': 'flex-start',
        'justifyContent': 'center'
      },
      logo:{
        width: '100%',
      }
    }

    return(
      <div style={styles.container}>
        <nav style={styles.main}>
        <div style={styles.logo} onClick={(e)=>this.props.action(e,'')}>
          <img src="../assets/THSM-Logo2.png" style={styles.logo} alt=''/>
        </div>
          {this.renderLinks(links)}
        </nav>
      </div>
    )
  }
}