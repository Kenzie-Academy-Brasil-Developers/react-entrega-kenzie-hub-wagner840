import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
  bigScreen: "@media(min-width: 1440px)",
};

export const ModalStyled = styled.form`
  position: absolute;
  width: 92%;
  height: 33%;
  top: 17%;
  left: 4%;
  z-index: 1;
  background-color: var(--grey-color-3);
  border-radius: 4px;
  ${media.desktop} {
    width: 40%;
    height: 24%;
    top: 21%;
    left: 30%;
  }
  ${media.bigScreen} {
    height: 33%;
  }

  .modal-header {
    display: flex;
    padding: 9.62602px 16.0434px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-color-2);
    button {
      border: none;
      color: var(--grey-color-1);
      background: none;
    }
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2vh;
    padding: 4%;
    ${media.desktop} {
      gap: 1vh;
    }
    select {
      margin-top: 2%;
      padding: 2%;
      background: #343b41;
      width: 100%;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      color: #ffffff;
    }
    button {
      width: 100%;
      height: 5vh;
      background: var(--color-primary);
      border: none;
      border-radius: 4px;
      margin-bottom: 11%;
      color: white;
      ${media.desktop} {
        height: 3vh;
      }
    }
  }
`;
