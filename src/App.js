// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import ListingsPage from "./pages/ListingsPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/listings/:state/:city" element={<ListingsPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
        <Route
          path="*"
          element={
            <div className="container text-center py-5">
              <h3>404 - Page Not Found</h3>
              <a href="/" className="btn btn-primary mt-3">Go Home</a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
