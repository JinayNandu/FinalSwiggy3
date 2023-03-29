import React from 'react';

function Header() {

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="#" style={styles.logo}>Swiggy</a>
        <ul style={styles.menu}>
          <li><a href="#" style={styles.menuItem}>Home</a></li>
          <li><a href="#" style={styles.menuItem}>Menu</a></li>
          <li><a href="#" style={styles.menuItem}>About</a></li>
          <li><a href="#" style={styles.menuItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '9999',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  menu: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
  },
  menuItem: {
    margin: '0 15px', // increase margin to add spacing
  },
};

export default Header;
