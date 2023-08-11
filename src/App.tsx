import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import Header from "pages/Header";
import Profile from "pages/Profile";
import Basket from "pages/Basket";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/basket' element={<Basket />} />
        {/* <Route path='/payment' element={<Payment />} /> */}
        <Route
          path='/*'
          element={<Navigate to='/' replace={true} />} // Redirect to login page if not logged in
        />
      </Routes>
    </div>
  );
}

export default App;
