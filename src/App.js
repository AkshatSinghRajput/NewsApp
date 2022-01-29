import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
export default class App extends Component {
  a = 'a';
  render() {
    return <div className='App'>
      <Navbar />
    </div>;
  }
}

