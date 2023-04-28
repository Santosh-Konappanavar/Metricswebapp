import React from 'react';
import Navbar from './navbar';

export default function Header() {
  return (
    <nav>
      <div className="header flex">
        <div className="header1 flex">
          <h2>Weather</h2>
        </div>
        <div className="flex">
          <Navbar />
        </div>
      </div>
      <hr className="hr" />
    </nav>
  );
}
