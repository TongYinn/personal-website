import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import { Navigate } from "react-router-dom";


function App() {
  return (

    <React.Fragment>
      <Router>
        <Home />
        <About />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </Router>
   </React.Fragment>
  );
}

export default App;
