import logo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button.jsx";
import { NavBarStyled } from "./NavBar";

export function NavBar({ showButton = true, text }) {
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("@Token:");
    localStorage.removeItem("@UserID:");
    navigate("/");
  }
  return (
    <NavBarStyled>
      <img src={logo} alt="" />
      {showButton && <Button prop={text} event={logOut} />}
    </NavBarStyled>
  );
}
