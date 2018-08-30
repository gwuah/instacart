import React from 'react';
import '../App.css'

const QuantityButton = (props) => {
  const handleClick = (event) => {
    console.log('button was clicked')
  }

  return (
    <button onClick={handleClick}>{props.content}</button>
  )
}

export default QuantityButton