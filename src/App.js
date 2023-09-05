import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <React.Fragment>
        <Home />
        <About />
        <Footer />
   </React.Fragment>
  );
}

export default App;
