import React from 'react';
import HeaderButton from './HeaderButton';
import '../App.css'

const Header = () => {
  return (
    <div>
      <nav className='Header'>
        <HeaderButton className='Close-btn' content='X'/>
        <HeaderButton content='My Carts'/>
      </nav>
    </div>
  )
}

export default Header;