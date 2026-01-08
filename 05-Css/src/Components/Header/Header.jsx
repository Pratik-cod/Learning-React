import React from 'react';
import styles from'./Header.module.css';   // ✅ Correct import

const Header = () => {
  return (
    <div className= {styles.newly}>
      <h1>Header</h1>
      <button className= {styles.advanceBtn}>Click me</button>
      <h1 className= {styles.tag} >Aarohi</h1>
    </div>

  );
};

export default Header;