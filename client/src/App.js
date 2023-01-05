import React, { useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Checkin from "./pages/Checkin";
import Checkout from "./pages/Checkout";
export const store = createContext();
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkin" element={<Checkin/>} />
            <Route path="/checkout" element={<Checkout/>} />



          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
