import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
};
export const HomePageStyled = styled.div`
  color: white;
  margin-top: 5%;
  .header {
    gap: 1vh;
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
  main {
    gap: 2vh;
    width: auto;
    height: 50%;
    display: flex;
    margin: 4%;
    flex-direction: column;
    .tec {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      border-radius: 4px;
      padding: 22px 19px;
      gap: 16px;
      width: 100%;
      height: 80%;
      display: flex;
      list-style: none;
      flex-direction: column;
      background-color: var(--grey-color-3);
    }
    button {
      width: 32.49px;
      height: 32px;
      color: white;
      border-radius: 4px;
      background-color: var(--grey-color-3);
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
