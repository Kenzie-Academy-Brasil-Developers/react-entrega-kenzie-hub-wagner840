import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
};
export const NavBarStyled = styled.nav`
  display: flex;
  width: 100%;
  height: 10vh;

  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
  ${media.desktop} {
    margin: 0 auto;
    width: 40%;
  }
  button {
    background: #212529;
    border-radius: 4px;
    width: 15%;
    color: white;
    border: none;
    height: 42%;
  }
`;
