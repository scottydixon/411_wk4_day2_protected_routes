import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";

// Write checkAuth function here
function checkAuth() {
  const cookies = cookie.parse(document.cookie);

  return !!cookies.loggedIn;
}
// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
const ProtectedRoute = ({ element, ...rest }) => {
  return checkAuth() ? (
    React.createElement(element, rest)
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/about" element={<About />} />
        <Route path="/car/:id" element={<Car />} />
      </Route>
    </Routes>
  );
};

export default Router;
