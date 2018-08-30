import React, { Component } from 'react';
import Header from './components/Header';
import CartItems from './components/CartItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        name: 'Banana',
        price: 30,
        currency: '$',
        quantity: 1
      },
      {
        name: 'Banku',
        price: 10,
        currency: '$',
        quantity: 2
      },
      {
        name: 'Bread',
        price: 30,
        currency: '$',
        quantity: 1
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <CartItems items={this.state.items}/>
      </div>
    );
  }
}

export default App;
