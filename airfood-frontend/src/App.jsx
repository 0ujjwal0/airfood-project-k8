import React from "react";
import Order from "./components/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
function App() {
  return (
    <div className="bg-plane-sunset bg-cover bg-center h-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/order"
            element={<Order />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
