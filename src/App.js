import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyHome from './Routes/myhome';
import Details from './Routes/itemdetails';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
