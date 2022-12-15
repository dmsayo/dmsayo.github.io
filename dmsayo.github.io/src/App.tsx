import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Projects />
    </div>
  );
}

export default App;
