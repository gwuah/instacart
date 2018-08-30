import React, { Component } from 'react';
import CartItem from './CartItem';
import '../App.css';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    }
  }
  render() {
    return (
      <div className='Cart-items'>
      {
        this.state.items.map((item,key) => {
          return <CartItem item={item} key={key}/>
        })
      }
      </div>
    );
  }
}

export default CartItems;
