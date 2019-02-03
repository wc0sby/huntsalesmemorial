import React, { Component } from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'


export default class Nav extends Component{

  renderLinks=(linkTextArr)=>{
    return (
      linkTextArr.map((i,k)=>{
      return (<div 
          key={k} 
          href='#' 
          style={{'textDecoration':'none', 'color': 'white', 'padding':'10% 0', 'paddingLeft':'5%'}}>
            <Link activeClass="active" className={`${i.class}`} to={i.class} spy={true} smooth={true} duration={1600} >
              {i.name}
            </Link>
        </div>
       )
      })
    )
  }

  render(){
    const { links } = this.props
    const styles = {
      main:{
        'fontFamily': `Didact Gothic, sans-serf`,
        'fontSize': '1.45em',
        'width': '15%',
        // 'opacity': '50%',
        'height': '100%',
        'background': 'rgba(0, 0, 0, 0.15)',
        'display': 'flex',
        'flex-direction': 'column',
        // 'justifyContent': 'space-between',
        'align-content': 'flex-start',
        'position': 'fixed'
      },
    }

    return(
      <nav style={styles.main}>
        {this.renderLinks(links)}
      </nav>
    )
  }
}