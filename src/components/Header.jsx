import React from 'react';
import '../styles/Header.css';
import img1 from '../images/my.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={img1} alt="Your Name" className="profile-photo" />
      <h1>Manisha arya</h1>

      <h2>Frontend Devloper</h2>
    </header>
  );
};

export default Header;