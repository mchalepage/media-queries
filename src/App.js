import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="start-bootstrap">Start Bootstrap</div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-list">
            <li className="nav-item">Services</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Team</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
      <header className="masthead">
        <div className="intro-lead-in">Welcome To Our Studio!</div>
        <div className="intro-heading">It's Nice To Meet You</div>
        <button className="tell-me-more">Tell Me More</button>
      </header>
    </div>
  );
}

export default App;
