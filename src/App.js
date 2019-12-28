import React from 'react';
import './App.css'
import DispalyList from './Components/Lists/DisplayList'
import CheckoutProvider from './Components/Checkout/CheckoutProvider'
import Checkout from './Components/Lists/CheckoutDisplay'
import BagButton from './Components/Bag/BagButton';
const App = () => {
  return (
    <CheckoutProvider>
      <header><BagButton /></header>
      <div className="grid">
        <DispalyList/>
        <Checkout />
      </div>
  </CheckoutProvider>)
}

export default App