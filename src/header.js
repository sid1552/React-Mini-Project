import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="facts_logo">
          <img src="./logo.svg" className="nav-logo" alt="logo"></img>
          <h1>ReactFacts</h1>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
