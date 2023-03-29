import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartButton.css';

function CartButton(props) {
  const { itemCount } = props;
  
  return (
    <Link to='/cart' className='cart-button'>
      <svg viewBox='0 0 24 24' className='cart-icon'>
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M16.9 18h-9.8l-.9-5h11.6zM8.5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 2H3v2h16V2zM6 6l2.3 9.3c.2.8 1 1.4 1.9 1.4h8.8c.9 0 1.7-.6 1.9-1.4L18 6H6z' />
        <circle cx='8' cy='20' r='2' />
        <circle cx='16' cy='20' r='2' />
      </svg>
      {itemCount > 0 && (
        <div className='cart-item-count'>
          <span>{itemCount}</span>
        </div>
      )}
    </Link>
  );
}

export default CartButton;
