import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
};

export const LoginPageStyled = styled.div`
  margin-top: 6%;
  margin-left: 10%;
  background-color: var(--grey-color-3);
  width: 80%;
  height: 80vh;

  display: flex;

  flex-direction: column;

  align-items: center;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  ${media.desktop} {
    width: 30%;
    margin: 0 auto;
    margin-top: 2%;
  }
  h3 {
    margin: 0 auto;

    color: var(--grey-color-0);
  }

  form {
    gap: 17.65px;
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    color: var(--grey-color-0);
    justify-content: center;
    button {
      color: white;
      width: 100%;
      height: 8vh;
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      background-color: var(--color-primary);
    }
  }
  button {
    width: 67vw;
    height: 8vh;
    background: var(--grey-color-1);

    border: 1.2182px solid var(--grey-color-1);
    border-radius: 4px;
    margin-bottom: 11%;
    ${media.desktop} {
      width: 24vw;
    }
  }
`;
