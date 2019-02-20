import React, { Component } from "react";
import TCard from "./tShirtCard";
import './tShirts.css';
import Shirt1 from '../assets/tshirt1.png'
import Shirt2 from '../assets/tshirt2.png'

export default class TShirt extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 100)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }

  getBoxes(shirtsArr) {
    return shirtsArr.map((i,k)=>{
      return <TCard shirt={i.file} id={i.id} key={k} />
    })
  }
  render() {
    const classNames = `${this.props.className} ShirtGrid`

    const shirts = [
      {
      id: 'YSHH2QY6YD532',
      color: 'black',
      file: Shirt1
      },
      {
       id: 'AB5FMA9A5KRCA',
       color: 'red',
       file: Shirt2
      },
    ]
    return (
      <div style={styles.container}>
        <div className={classNames} id={this.props.id}>
      {/* <h1 style={{color:'white', textAlign:'left', marginLeft: '10%'}}>Merch</h1> */}
        {this.getBoxes(shirts)}
        </div>
      </div>
    );
  }
}

const styles = {
  container:{
    width: '75%',
    maxHeight: 1000,
    overflow: 'auto',
    margin: 'auto'
  }
}
