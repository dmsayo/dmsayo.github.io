import React from 'react';
import './App.scss';
import { About } from './components/About/About';
import { Landing } from './components/Landing/Landing';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
