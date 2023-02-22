import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [tech, setTech] = useState({});

  // Register

  const navigate = useNavigate();
  async function registerUser(formData) {
    try {
      const response = await api.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  //Login
  const [user, setUser] = useState({});

  async function loginUser(formDataLogin) {
    try {
      const response = await api.post("/sessions", formDataLogin);
      localStorage.setItem("@Token:", response.data.token);
      localStorage.setItem("@UserID:", response.data.user.id);
      setUser(response.data.user.id);
      setTech(response.data.user.techs);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const token = localStorage.getItem("@Token:");

  useEffect(() => {
    async function userProfile() {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.id);
        setTech(response.data.techs);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@Token:");
      }
    }
    if (token) {
      userProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ registerUser, user, setUser, loginUser, token, setTech, tech }}
    >
      {children}
    </UserContext.Provider>
  );
}
