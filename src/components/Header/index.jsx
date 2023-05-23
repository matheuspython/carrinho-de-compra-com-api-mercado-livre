import React from 'react';
import SearchBar from '../SearchBar';
import './index.css';
import CartButton from '../CartButton';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
