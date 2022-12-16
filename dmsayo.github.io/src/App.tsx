import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { About } from './components/About/About';
import { Landing } from './components/Landing/Landing';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Landing />
        <About />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
