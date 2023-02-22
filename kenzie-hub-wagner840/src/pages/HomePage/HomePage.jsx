import { useContext, useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { HomePageContext } from "../../providers/HomePageContext.jsx";
import { UserContext } from "../../providers/UserContext.jsx";
import { HomePageStyled } from "./HomePage.js";
import { Button } from "../../components/Button/Button.jsx";
import { Li } from "../../components/Li/Li.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";
import ModalDelete from "../../components/ModalDelete/ModalDelete.jsx";

function HomePage() {
  const { user, tech } = useContext(UserContext);

  const {
    getUser,
    openModal,
    setOpenModal,
    selectedTechId,
    setSelectedTechId,
    setOpenTechModal,
  } = useContext(HomePageContext);

  useEffect(() => {
    getUser(localStorage.getItem("@UserID:"));
  }, [user]);

  const handleLiClick = (tec) => {
    setSelectedTechId(tec);

    setOpenTechModal(true);
  };

  return (
    <>
      <NavBar text={"sair"} />
      <HomePageStyled>
        <div className="header">
          <h1 className="title-1">
            <strong> Olá {user.name} </strong>
          </h1>
          <span className="headline">{user.course_module}</span>
        </div>
        <main>
          <div className="tec">
            <h3 className="title-2">
              <strong> Tecnologias </strong>
            </h3>
            <Button
              identifier={"addTec"}
              event={() => setOpenModal(true)}
              prop={"+"}
            />
          </div>
          <ul>
            {tech.length > 0 ? (
              tech.map((tec) => {
                return (
                  <Li
                    key={tec.id}
                    text={tec.title}
                    status={tec.status}
                    onClick={() => handleLiClick(tec)}
                  />
                );
              })
            ) : (
              <Li text={"Não há tecnologia adicionada"} />
            )}
          </ul>
        </main>
        {openModal && <Modal />}
        {selectedTechId && (
          <ModalDelete
            techId={selectedTechId}
            onClose={() => setSelectedTechId(null)}
          />
        )}
      </HomePageStyled>
    </>
  );
}

export default HomePage;
