import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Footer from "./components/Footer"
import Contact from './components/Contact';
import UnderConstruction from './components/UnderConstruction';
const App = () => {
    return (
        <div>
            <Navbar/>
            <UnderConstruction/>
            <Hero/>
            <About/>
            <Features/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;