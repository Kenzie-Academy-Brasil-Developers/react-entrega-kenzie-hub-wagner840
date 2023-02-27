import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1023px)",
  bigScreen: "@media(min-width: 1440px)",
};
export const ModalDeleteStyled = styled.div`
  position: absolute;
  width: 92%;
  height: 29%;
  top: 17%;
  left: 4%;
  z-index: 1;
  background-color: var(--grey-color-3);
  border-radius: 4px;
  ${media.desktop} {
    width: 40%;
    height: 25%;
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
    input {
      margin-top: 2%;
      padding: 2%;
      background: #343b41;
      width: 100%;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      color: #ffffff;
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
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .save {
        width: 60%;
        height: 4vh;
        color: white;
        background-color: var(--color-primary);
        border-radius: 4px;
        border: 1px solid var(--grey-color-1);
        ${media.desktop} {
          height: 3vh;
        }
      }
      .delete {
        width: 30%;
        height: 4vh;
        color: white;
        background-color: var(--grey-color-1);
        border-radius: 4px;
        border: 1px solid var(--grey-color-1);
        ${media.desktop} {
          height: 3vh;
        }
      }
    }
  }
`;
