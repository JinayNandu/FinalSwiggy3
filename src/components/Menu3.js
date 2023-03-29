import React from 'react';
import { useHistory } from 'react-router-dom';

function Menu3() {
  const history = useHistory(); // initialize the useHistory hook

  const handleBackClick = () => {
    history.goBack(); // go back to the previous page
    setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
  };

  return (
    <div>
      <h1>Menu 3</h1>
      <p>This is the menu for Restaurant 3</p>
      { <button onClick={handleBackClick}>Back</button>  /*add a back button to go to the previous page */}
    </div>
  );
}

export default Menu3;
