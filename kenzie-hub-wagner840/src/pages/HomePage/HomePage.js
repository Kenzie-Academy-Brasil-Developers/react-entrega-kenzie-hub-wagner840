import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
};
export const HomePageStyled = styled.div`
  color: white;
  margin-top: 5%;
  .header {
    padding: 5%;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 40%;
    border-top: 1px #f0f0f0 solid;
    border-bottom: 1px #f0f0f0 solid;
    justify-content: space-around;
    align-items: flex-start;
    ${media.desktop} {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-evenly;
    }
  }
  .hide {
    display: none;
    ${media.desktop} {
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`;
