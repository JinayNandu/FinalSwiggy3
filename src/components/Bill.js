import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Bill() {
  const total = localStorage.getItem('billTotal');
  const items = JSON.parse(localStorage.getItem('billContents')); // parse the items array from local storage
  const [name, setName] = useState(''); // initialize the name state
  const [table, setTable] = useState(''); // initialize the table state
  const [error, setError] = useState(null); // initialize the error state

  const history = useHistory(); // initialize the useHistory hook

const handlePlaceOrder = () => {
    const order = {
      name: name,
      table: table,
      items: items,
      total: total,
    };
    // send the order to the restaurant's backend using a fetch or axios request
    // replace <your-backend-url> with the actual URL of the restaurant's backend
    fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // handle the response from the backend, e.g. display a success message
        alert(data.message);
      })
      .catch((error) => {
        // handle any errors that occur during the request, e.g. display an error message
        alert('Error placing order. Please try again later.');
      });
  };
  

  const handleBackClick = () => {
    history.goBack(); // go back to the previous page
    setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
  };

  return (
    <div>
      <h1>Bill</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.count}</td>
              <td>${item.price * item.count}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Table:
          <input type="text" value={table} onChange={(e) => setTable(e.target.value)} />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={handleBackClick}>Back</button> {/*add a back button to go to the previous page */}
    </div>
  );
}

export default Bill;

