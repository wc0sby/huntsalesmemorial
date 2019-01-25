import React, { Component } from "react";
import TCard from "./tShirtCard";
import './tShirts.css';

export default class TShirt extends Component {
  getBoxes(shirtsArr) {
    return shirtsArr.map((i,k)=>{
      return <TCard shirt={i.file} id={i.id} />
    })
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
        <div className="ShirtGrid">
      <h1 style={{color:'white', textAlign:'left', marginLeft: '10%'}}>Merch</h1>
        {this.getBoxes(shirts)}
        </div>
      </div>
    );
  }
}
