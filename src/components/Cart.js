import React from 'react';
import '../styles/Cart.css';
import CartItem from './CartItem';

function Cart(props) {
  const { cart, removeFromCart, clearCart, incrementCount, decrementCount } = props;

  if (!cart) return null;

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.count;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items-container">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                />
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="cart-buttons">
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
