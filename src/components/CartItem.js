import React from 'react';
import '../styles/Cart.css';

function CartItem(props) {
  const { item, removeFromCart, incrementCount, decrementCount } = props;

  return (
    <tr className="cart-item">
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <button className="cart-item-decrement" onClick={() => decrementCount(item.id)}>
          -
        </button>
        <span className="cart-item-count">{item.count}</span>
        <button className="cart-item-increment" onClick={() => incrementCount(item.id)}>
          +
        </button>
      </td>
      <td>${(item.price * item.count).toFixed(2)}</td>
      <td>
        <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
