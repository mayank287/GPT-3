import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Features,
  Header,
  possibility,
  WhatGPT3,
  Possibility,
} from "./Containers";
import { Cta, Brand, Navbar } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta /> //Click To Action
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
