import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import FreePostWrite from "./pages/FreePostWrite/FreePostWrite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/free/write" element={<FreePostWrite />} />
          <Route path="/free/write/:id" element={<FreePostWrite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
