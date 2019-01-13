import React, { Component } from "react";
import PayPal from './paypalButton'

export default class TshirtCard extends Component {

  render() {
    return (
      <div className="CardGrid">
        <div className="ShirtImg">
          <img
            src={`http://localhost:3001/img/${this.props.shirt}.png`}
            alt="test"
            style={{ width: "75%", height: '75%' }}
          />
        </div>
        
        
        <div className="Box"> <PayPal id={this.props.id}/> </div>
        {/* <div className="Box" /> */}
      </div>
    );
  }
}

