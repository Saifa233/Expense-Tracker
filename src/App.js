import React from 'react';
import './App.css';
import { Header } from './components/Header';
import  { Balance } from './components/Balance';
import  { Incomeexpenses } from './components/Incomeexpenses';
import { Transactionlist } from './components/Transactionlist';
import { Addtransaction } from './components/Addtransaction';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses />
        <Transactionlist />
        <Addtransaction />
      </div>
      </div>
  );
}

export default App;
