//  import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landingfile from "./screens/landingpage/Landingfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/landingpage/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landingfile />}></Route>
        {/* <Route exact index element={<Landingfile />} /> */}
        <Route exact path="/mynotes" element={<MyNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
