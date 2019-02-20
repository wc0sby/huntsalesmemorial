import React, { Component } from 'react'
import Record from './amazonRecord'

export default class Videos extends Component{

  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 100)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }


  renderRecords = (recordArr) => {
    return recordArr.map((i,k)=>{
      return (
      <Record
        key={k}
        imageURL={i.imageURL}
        amazonURL={i.amazonURL}
        format={i.format}
        title={i.title}
        subtitle={i.subtitle}
      />
      )
    })
  }
  render(){
    return(
      <div style={styles.container} id={this.props.id} className={this.props.className}>
      {this.renderRecords(recordLinkArr)}
        {/* <Record imageURL={'https://images-na.ssl-images-amazon.com/images/I/71vj%2Blfx7CL._SX522_.jpg'} amazonURL={'https://amzn.to/2EdBUNE'} description={"CD"}/> */}
      </div>
    )
  }
}
const recordLinkArr = [
  {imageURL: 'https://f4.bcbits.com/img/0014698415_10.jpg',
   amazonURL: "https://www.amazon.com/Your-Shit-Together-Sales-Memorial/dp/B07JJGGBHH/ref=sr_1_1?crid=F3ZCCG3N5GTX&keywords=hunt+sales+memorial&qid=1550346738&s=gateway&sprefix=the+hunt+sales+m%2Caps%2C163&sr=8-1",
   format: "Audio CD",
   title: "Get Your Shit Together",
   subtitle: "24x24 poster included"
  },
  {imageURL: 'https://f4.bcbits.com/img/0015246462_10.jpg',
   amazonURL: "https://www.amazon.com/Your-Shit-Together-Sales-Memorial/dp/B07JJK8TMD/ref=sr_1_2?crid=F3ZCCG3N5GTX&keywords=hunt+sales+memorial&qid=1550346808&s=gateway&sprefix=the+hunt+sales+m%2Caps%2C163&sr=8-2",
   format: "Vinyl LP",
   title: "Get Your Shit Together",
   subtitle: "mini-poster included"
  },

]



const styles = {
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto',
    width: '65%',
    background: 'rgba(0, 0, 0, 0.15)',
    maxHeight: 700,
    overflow: 'auto',
  }
}