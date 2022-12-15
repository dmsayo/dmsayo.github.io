import React from 'react';
import './App.scss';
import { Landing } from './components/Landing/Landing';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div className="App_projects">
        Projects
      </div>
      <Projects />
    </div>
  );
}

export default App;
