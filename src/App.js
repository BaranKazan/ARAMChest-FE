import './App.css';
import React, { Component } from 'react';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Riot from "./components/Riot";


class App extends Component {

  render() {
    return (
        <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/riot.txt" element={<Riot />} />
        </Routes>
    );
  }
}

export default App;
