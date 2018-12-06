import React, { Component } from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'


export default class Nav extends Component{

  renderLinks=(linkTextArr)=>{
    return (
      linkTextArr.map((i,k)=>{
      return (<div 
          key={k} 
          href='#' 
          style={{'textDecoration':'none', 'color': 'white'}}>
            <Link activeClass="active" className={i.class} to={i.class} spy={true} smooth={true} duration={1600} >
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
        'fontFamily': `Reenie Beanie, cursive`,
        'fontSize': '1.45em',
        'width': '60%',
        'opacity': '50%',
        'display': 'flex',
        'justifyContent': 'space-around',
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