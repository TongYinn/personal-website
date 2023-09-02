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
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
