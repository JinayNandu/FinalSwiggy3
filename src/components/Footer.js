import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p style={styles.footerText}>© 2023 Swiggy</p>
        <ul style={styles.footerLinks}>
          <li><a href="#" style={styles.menuItem}>About Us</a></li>
          <li><a href="#" style={styles.menuItem}>Contact Us</a></li>
          <li><a href="#" style={styles.menuItem}>Terms and Conditions</a></li>
          <li><a href="#" style={styles.menuItem}>Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    marginTop: '50px',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    margin: '0',
  },
  footerLinks: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
  },
  footerLink: {
    margin: '0 10px',
  },
  menuItem: {
    margin: '0 15px', // increase margin to add spacing
  },
};

export default Footer;
