import React, { Component } from 'react'
import Article from './article'
import { Link, animateScroll as Scroll } from 'react-scroll'
import text from '../about'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = {
  container: {
    padding: '8% 10% 1%',
  },
  card: {
    maxWidth: '90%',
    maxHeight: 680,
    background: 'rgba(68, 68, 68, 0.1)',
    color: 'white',
    textAlign: 'left',
    margin: '2% 10%'
  },
  flexContainer:{
    display: 'flex'
  },
  image:{
    maxHeight: '25%'
  }
};

class About extends Component{
  render(){
    const { height, name, classes } = this.props
    return(
      <div>
        <section style={{height}} className={name} name={name}>
          <div className={classes.container}>
          <h1 style={{color:'white', textAlign:'left'}}>{name.toUpperCase()}</h1>
          <div style={styles.flexContainer}>
            <img style={{maxHeight:height*.60, transform: 'Rotate(-10deg)', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} src="assets/Hunt Urinal Shot.JPG" alt=""/>
            <div>
              <Card className={classes.card}>
                <Article text={`text`}/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam, omnis temporibus sint voluptate itaque incidunt facere cumque velit corrupti aperiam ipsum voluptates? Dolorum recusandae officiis optio commodi expedita labore?
                  {/* <Link activeClass="active" className='main' to='main' spy={true} smooth={true} duration={1600}>
                    Top
                  </Link> */}
              </Card>
              <Card className={classes.card}>
                <Article text={`text`}/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam, omnis temporibus sint voluptate itaque incidunt facere cumque velit corrupti aperiam ipsum voluptates? Dolorum recusandae officiis optio commodi expedita labore?
                  {/* <Link activeClass="active" className='main' to='main' spy={true} smooth={true} duration={1600}>
                    Top
                  </Link> */}
              </Card>
              <Card className={classes.card}>
                <Article text={`text`}/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam, omnis temporibus sint voluptate itaque incidunt facere cumque velit corrupti aperiam ipsum voluptates? Dolorum recusandae officiis optio commodi expedita labore?
                  {/* <Link activeClass="active" className='main' to='main' spy={true} smooth={true} duration={1600}>
                    Top
                  </Link> */}
              </Card>
              <Card className={classes.card}>
                <Article text={`text`}/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam, omnis temporibus sint voluptate itaque incidunt facere cumque velit corrupti aperiam ipsum voluptates? Dolorum recusandae officiis optio commodi expedita labore?
                  {/* <Link activeClass="active" className='main' to='main' spy={true} smooth={true} duration={1600}>
                    Top
                  </Link> */}
              </Card>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default withStyles(styles)(About)