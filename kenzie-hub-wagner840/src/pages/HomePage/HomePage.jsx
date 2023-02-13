import { useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { HomePageStyled } from "./HomePage.js";

function HomePage({ user, setUser, getUser }) {
  useEffect(() => {
    getUser(localStorage.getItem("@UserID:"));
  }, []);
  return (
    <>
      <NavBar text={"sair"} />
      <HomePageStyled>
        <div className="header">
          <h1 className="title-1">
            <strong> olá {user.name}</strong>
          </h1>
          <span className="headline">{user.course_module}</span>
        </div>
        <main className="hide">
          <h3 className="title-1">
            <strong>Que pena! Estamos em desenvolvimento :( </strong>
          </h3>
          <span className="headling ">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </span>
        </main>
      </HomePageStyled>
    </>
  );
}
export default HomePage;
