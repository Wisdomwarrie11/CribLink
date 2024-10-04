// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AccommodationDetail from './components/AccommodationDetail';
import ItemDetail from './components/ItemDetail';
import Navbar from './Navbar';
function App() {
  return (

    
    <Router>
      <div>
      <Navbar/>
      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
