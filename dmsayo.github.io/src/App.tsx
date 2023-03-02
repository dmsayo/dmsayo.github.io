import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { About } from "./components/About/About";
import { Landing } from "./components/Landing/Landing";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar />
                <Landing />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
