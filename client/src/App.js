import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Banlance'
import Expense from './components/Expense'
import Transaction from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import GlobalProvider from './contex/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
