import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow />
    <h1 className='equal'> = </h1>
    <CurrencyRow />
    </>
  );
}

export default App;
