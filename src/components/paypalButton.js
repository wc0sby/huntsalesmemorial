import React, { Component } from 'react'

export default class PayPal extends Component{
  render(){
    const styles = {
      label:{
        color: 'white',
      },
      button:{
        margin: '2%'
      }
    }
    return(
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value={this.props.id}/>
      
        <div>
          <div style={styles.label}>
            <input  type="hidden" name="on0" value="Size"/>Select Size
          </div>
          <select name="os0">
            <option value="S">S $25.00 USD</option>
            <option value="M">M $25.00 USD</option>
            <option value="L">L $25.00 USD</option>
            <option value="XL">XL $25.00 USD</option>
          </select> 
        </div>

        <input type="hidden" name="currency_code" value="USD"/>
        <input style={styles.button} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
    )
  }
}



