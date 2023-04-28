import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/head';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="myprofile" element={<Header />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
