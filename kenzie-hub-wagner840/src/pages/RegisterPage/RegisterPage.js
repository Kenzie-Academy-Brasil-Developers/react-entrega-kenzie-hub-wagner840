import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1023px)",
};

export const RegisterPageStyled = styled.div`
  margin-top: 6%;
  margin-left: 10%;
  background-color: var(--grey-color-3);
  width: 80%;
  height: fit-content;

  display: flex;

  flex-direction: column;

  align-items: center;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  gap: 2%;
  ${media.desktop} {
    width: 30%;
    margin: 0 auto;
    margin-top: 2%;
  }

  h3 {
    color: var(--grey-color-0);
    margin-top: 5%;
  }
  span {
    color: var(--grey-color-1);
    margin-top: 5%;
  }

  form {
    gap: 17.65px;
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    color: var(--grey-color-0);
    justify-content: center;
    input {
      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
    }
    button {
      color: white;
      width: 100%;
      height: 8vh;
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      background-color: var(--color-primary);
    }
    select {
      background: #343b41;
      height: 6vh;
      color: white;
      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
    }
  }
  button {
    width: 67vw;
    height: 8vh;
    background: var(--grey-color-1);

    border: 1.2182px solid var(--grey-color-1);
    border-radius: 4px;
    margin-bottom: 11%;
  }
`;
