import React, { Component } from 'react';
import QuantityButton from './QuantityButton';
import '../App.css'

class CartItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      item: props,
    }
  }
  render() {
    const {item} = this.state.item
    return (
      <div>
        <img src={item.imgUrl} alt={item.name}/>
        <span>{item.name}</span>
        <div className='quantity-container'>
          <QuantityButton content="-"/>
          <span>{item.quantity}</span>
          <QuantityButton content="+"/>
        </div>
      </div>
    )
  }
}

export default CartItem;