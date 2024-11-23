import React from 'react';
import './App.css';
import AppHeader from './components/Header';
import { CafeDatabase } from './components/CafeDatabase';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <CafeDatabase></CafeDatabase>
    </div>
  );
}

export default App;
