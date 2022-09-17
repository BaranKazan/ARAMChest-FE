import './App.css';
import React, { Component } from 'react';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    );
  }
}

export default App;
