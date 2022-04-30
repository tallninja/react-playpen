import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Player from "./components/Player";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
