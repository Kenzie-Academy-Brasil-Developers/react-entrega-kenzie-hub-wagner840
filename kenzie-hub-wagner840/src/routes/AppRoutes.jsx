import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import { api } from "../services/api.js";

function AppRoutes() {
  async function registerUser(formData) {
    try {
      const response = await api.post("/users", formData);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/register"
        element={<RegisterPage registerUser={registerUser} />}
      />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
export default AppRoutes;
