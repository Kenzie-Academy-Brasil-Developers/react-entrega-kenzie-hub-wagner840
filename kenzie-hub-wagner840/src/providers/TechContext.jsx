import { useContext } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { tech, setTech } = useContext(UserContext);

  async function addTech(formData) {
    try {
      const response = await api.post(`/users/techs`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:")}`,
        },
      });
      setTech([...tech, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech(tecTodelete) {
    try {
      const response = await api.delete(`/users/techs/${tecTodelete.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:")}`,
        },
      });
      setTech(tech.filter((tec) => tec.id != tecTodelete.id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider value={{ tech, setTech, addTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
}
