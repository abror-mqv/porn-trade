import React from 'react';
import './App.css';
import About from './components/blocks/About';
import { Header } from './components/blocks/Header';
import Main from './components/blocks/Main';
import RunLine from './components/fabrics/RunLine';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
