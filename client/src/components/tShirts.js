import React, { Component } from "react";
import TCard from "./tShirtCard";
import './tShirts.css';

export default class TShirt extends Component {
  getBoxes(shirtsArr) {
    return shirtsArr.map((i,k)=>{
      return <TCard shirt={i.file} id={i.id} />
    })
    // let myArr = [];
    // for (let i = 0; i < 2; i++) {
    //   myArr.push(<TCard shirt={i+1}/>);
    // }
    // return myArr;
  }
  render() {
    const shirts = [
      {
      id: 'YSHH2QY6YD532',
      color: 'black',
      file: 'tshirt1'
      },
      {
       id: 'AB5FMA9A5KRCA',
       color: 'red',
       file: 'tshirt2' 
      }
    ]
    return (
      <div className="shop" name="shop">
        <div className="ShirtGrid">{this.getBoxes(shirts)}</div>
      </div>
    );
  }
}
