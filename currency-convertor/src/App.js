import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';


const baseUrl = 'https://api.exchangeratesapi.io/latest';


function App() {

  const [currencyOptions, setcurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      setcurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
  }, [])


  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow 
    currencyOptions = {currencyOptions}
    />
    <h1 className='equal'> = </h1>
    <CurrencyRow 
    currencyOptions = {currencyOptions}
    />
    </>
  );
}

export default App;
