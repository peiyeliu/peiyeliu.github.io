import React, {Component} from "react";
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Info />
        <TechStack />
        {/*<Projects />*/}
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

