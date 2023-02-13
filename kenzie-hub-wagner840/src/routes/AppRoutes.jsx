import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import { api } from "../services/api.js";
import { Link } from "react-router-dom";

function AppRoutes() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  async function loginUser(formDataLogin) {
    try {
      const response = await api.post("/sessions", formDataLogin);
      localStorage.setItem("@Token:", response.data.token);
      localStorage.setItem("@UserID:", response.data.user.id);
      setUser(response.data.user.id);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }
  async function registerUser(formData) {
    try {
      const response = await api.post("/users", formData);
    } catch (error) {
      console.log(error);
    }
  }
  async function getUser(userID) {
    try {
      const response = await api.get(`/users/${userID}`, user);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage loginUser={loginUser} />} />
      <Route
        path="/register"
        element={<RegisterPage registerUser={registerUser} />}
      />
      <Route
        path="/home"
        element={<HomePage user={user} setUser={setUser} getUser={getUser} />}
      />
    </Routes>
  );
}
export default AppRoutes;
