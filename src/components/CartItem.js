import React, { Component } from 'react';
import QuantityButton from './QuantityButton';
import '../App.css'

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.item.name,
      imgUrl: props.item.imgUrl,
      price: props.item.price,
      quantity: props.item.quantity
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.imgUrl}/>
        <span>{this.state.name}</span>
        <div className='quantity-container'>
          <QuantityButton content="-"/>
          <span>{this.state.quantity}</span>
          <QuantityButton content="+"/>
        </div>
      </div>
    )
  }
}

export default CartItem;