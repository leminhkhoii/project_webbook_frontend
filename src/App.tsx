import React, { useState } from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Banner from './layouts/homepage/components/Banner';
import HomePage from './layouts/homepage/HomePage';
import { getAllBooks } from './api/BookApi';

function App() {
  const [wordForSearch, setWordForSearch]= useState('');


  return (
    <div className='App'>
      <Navbar wordForSearch={wordForSearch} setWordForSearch={setWordForSearch} />
      <HomePage wordForSearch={wordForSearch}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
