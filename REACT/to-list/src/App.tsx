import React from 'react';
import { Header } from './components/Header/Header';

import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';

import { Memoization } from './components/Concepts/Memo';

function App() {
  return (
    <>
    <Header />
    
    

    <Memoization financialData={{incomes: [50, 20, 30], outcomes: [5, 8, 4]}} />

    <Tasks />
    </>
  );
}

export default App;
