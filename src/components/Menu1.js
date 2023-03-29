import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu1() {
  const history = useHistory(); // initialize the useHistory hook

  const handleBackClick = () => {
    history.goBack(); // go back to the previous page
    setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
  };

  const [items, setItems] = useState([
    { name: 'Item 1', price: 10, count: 0 },
    { name: 'Item 2', price: 20, count: 0 },
    { name: 'Item 3', price: 30, count: 0 },
    { name: 'Item 4', price: 40, count: 0 },
  ]);

  const incrementCount = (index) => {
    const newItems = [...items];
    newItems[index].count++;
    setItems(newItems);
  };

  const decrementCount = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 0) {
      newItems[index].count--;
      setItems(newItems);
    }
  };

  const orderNow = () => {
    const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
    localStorage.setItem('billTotal', total);
    localStorage.setItem('billContents', JSON.stringify(items));
    setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
  };

  return (
    <div className="menu-container">
      <h1>Menu 1</h1>
      {items.map((item, index) => (
        <div className="menu-item" key={index}>
          <div className="menu-item-details">
            <div className="menu-item-name">{item.name}</div>
            <div className="menu-item-price">${item.price}</div>
          </div>
          <div className="menu-item-count">
            <button className="menu-item-decrement" onClick={() => decrementCount(index)}>
              -
            </button>
            <div className="menu-item-count-value">{item.count}</div>
            <button className="menu-item-increment" onClick={() => incrementCount(index)}>
              +
            </button>
          </div>
        </div>
      ))}
      <Link to={{ pathname: '/bill', search: `?items=${JSON.stringify(items)}` }} className="order-now" onClick={orderNow}>
        Order Now
      </Link>
      <button onClick={handleBackClick}>Back</button> {/* add a back button to go to the previous page */}
    </div>
  );
}

export default Menu1;

// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import '../styles/Menu.css';

// function Menu1() {
//   const history = useHistory(); // initialize the useHistory hook

//   const handleBackClick = () => {
//     history.goBack(); // go back to the previous page
//     setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
//   };

//   const [items, setItems] = useState([
//     { name: 'Item 1', price: 10, count: 0 },
//     { name: 'Item 2', price: 20, count: 0 },
//     { name: 'Item 3', price: 30, count: 0 },
//     { name: 'Item 4', price: 40, count: 0 },
//   ]);

//   const incrementCount = (index) => {
//     const newItems = [...items];
//     newItems[index].count++;
//     setItems(newItems);
//   };

//   const decrementCount = (index) => {
//     const newItems = [...items];
//     if (newItems[index].count > 0) {
//       newItems[index].count--;
//       setItems(newItems);
//     }
//   };

//   const addToCart = (index) => {
//     const newItems = [...items];
//     newItems[index].count = 0;
//     setItems(newItems);
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push(newItems[index]);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };

//   const orderNow = () => {
//     const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
//     localStorage.setItem('billTotal', total);
//     localStorage.setItem('billContents', JSON.stringify(items));
//     setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
//   };

//   return (
//     <div className="menu-container">
//       <h1>Menu 1</h1>
//       {items.map((item, index) => (
//         <div className="menu-item" key={index}>
//           <div className="menu-item-details">
//             <div className="menu-item-name">{item.name}</div>
//             <div className="menu-item-price">${item.price}</div>
//           </div>
//           <div className="menu-item-count">
//             <button className="menu-item-decrement" onClick={() => decrementCount(index)}>
//               -
//             </button>
//             <div className="menu-item-count-value">{item.count}</div>
//             <button className="menu-item-increment" onClick={() => incrementCount(index)}>
//               +
//             </button>
//           </div>
//           <button className="add-to-cart" onClick={() => addToCart(index)}>
//             Add to cart
//           </button>
//         </div>
//       ))}
//       <Link to={{ pathname: '/bill', search: `?items=${JSON.stringify(items)}` }} className="order-now" onClick={orderNow}>
//         Order Now
//       </Link>
//       <button onClick={handleBackClick}>Back</button> {/* add a back button to go to the previous page */}
//     </div>
//   );
// }

// export default Menu1;





