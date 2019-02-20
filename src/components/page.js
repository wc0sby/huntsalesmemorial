import React, { Component } from 'react'
import Article from './article'
import articleText from '../articleText'
import HuntShot from '../assets/Hunt urinal shot.JPG'
// import { Link, animateScroll as Scroll } from 'react-scroll'
// import text from '../about'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = {
  container: {
    margin: 'auto 15%',
    // opacity: 0.01
  },
  card: {
    maxWidth: '90%',
    // maxHeight: '100%',
    background: 'rgba(68, 68, 68, 0.1)',
    color: 'white',
    textAlign: 'left',
    margin: '2% 10%'
  },
  flexContainer:{
    // width: '75%',
    display: 'flex'
  },
  image:{
    margin: 'auto',
    width: '30%',
    height: '50%',
    transform: 'Rotate(-10deg)', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  content:{
    maxHeight:800, 
    overflow:'auto'
  }
};

//renders all articles from the articleText.js file
//TODO: make a web form for this to be quickly edited
const renderArticles = (text, classes) =>{
  return text.map((i,k)=>{
    return(<Card className={classes.card} key={k}>
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

  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 100)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }

  render(){
    const { classes } = this.props
    const classNames = `${this.props.className} ${classes.container}`
    return(
      <div id={this.props.id} className={classNames}>
        {/* <section style={{height}} className={name} name={name}> */}
          <div>
          {/* <h1 style={{color:'white', textAlign:'left'}}>{name.toUpperCase()}</h1> */}
            <div style={styles.flexContainer}>
              <img style={styles.image} src={HuntShot} alt=""/>
              <div style={styles.content}>
                {renderArticles(articleText, classes)}
              </div>
            </div>
          </div>
      </div>

    )
  }
}
export default withStyles(styles)(About)