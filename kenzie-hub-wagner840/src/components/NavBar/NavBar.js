import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1023px)",
};
export const NavBarStyled = styled.nav`
  display: flex;
  width: 100%;
  height: 10vh;

  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  ${media.desktop} {
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background: #212529;
    border-radius: 4px;
    width: 15%;
    color: white;
    border: none;
    height: 42%;

    ${media.desktop} {
      width: 15%;
      height: 30%;
    }
  }
`;
