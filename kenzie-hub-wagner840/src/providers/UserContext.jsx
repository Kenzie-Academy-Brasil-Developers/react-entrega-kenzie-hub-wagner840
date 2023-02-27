import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [tech, setTech] = useState({});

  const navigate = useNavigate();
  async function registerUser(formData) {
    try {
      const response = await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const [user, setUser] = useState({});

  async function loginUser(formDataLogin) {
    try {
      const response = await api.post("/sessions", formDataLogin);
      localStorage.setItem("@Token:", response.data.token);
      localStorage.setItem("@UserID:", response.data.user.id);
      setUser(response.data.user.id);
      setTech(response.data.user.techs);
      toast.success("Login realizado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorretos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
