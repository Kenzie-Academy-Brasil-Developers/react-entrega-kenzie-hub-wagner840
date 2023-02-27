import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const HomePageContext = createContext({});

export function HomePageProvider({ children }) {
  const [selectedTechId, setSelectedTechId] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [openTechModal, setOpenTechModal] = useState(false);

  const navigate = useNavigate();

  async function getUser(userID) {
    try {
      const response = await api.get(`/users/${userID}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  return (
    <HomePageContext.Provider
      value={{
        getUser,
        openModal,
        setOpenModal,
        selectedTechId,
        setSelectedTechId,
        openTechModal,
        setOpenTechModal,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}
