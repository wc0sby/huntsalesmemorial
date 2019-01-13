import React, { Component } from 'react'
import Article from './article'
import articleText from '../articleText'
// import { Link, animateScroll as Scroll } from 'react-scroll'
// import text from '../about'

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


//renders all articles from the articleText.js file
//TODO: make a web form for this to be quickly edited
const renderArticles = (text, classes) =>{
  return text.map((i,k)=>{
    return(<Card className={classes.card}>
      <Article 
        header={i.header} 
        source={i.source}
        content={i.content}
        imgLink={i.imgLink}
        srcLink={i.srcLink}
      />
    </Card>)
  })
}

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
            <div style={{maxHeight:600, overflow:'auto'}}>
              {renderArticles(articleText, classes)}
            </div>
                  {/* <Link activeClass="active" className='main' to='main' spy={true} smooth={true} duration={1600}>
                    Top
                  </Link> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default withStyles(styles)(About)