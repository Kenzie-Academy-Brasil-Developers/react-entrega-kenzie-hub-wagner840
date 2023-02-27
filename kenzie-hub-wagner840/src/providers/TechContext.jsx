import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
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
      toast.success("Tecnologia adicionada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTech([...tech, response.data]);
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

  async function deleteTech(tecTodelete) {
    try {
      const response = await api.delete(`/users/techs/${tecTodelete.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:")}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTech(tech.filter((tec) => tec.id != tecTodelete.id));
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
  async function updateTech(tecToUpdate) {
    try {
      const response = await api.put(
        `/users/techs/${tecToUpdate.id}`,
        tecToUpdate,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:")}`,
          },
        }
      );
      toast.success("Tecnologia atualizada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTech((oldTech) =>
        oldTech.map((tec) =>
          tec.id === response.data.id ? response.data : tec
        )
      );
      console.log(tech);
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
  return (
    <TechContext.Provider
      value={{ tech, setTech, addTech, deleteTech, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
}
