import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;

    > form {
      max-width: 350px;
      margin: 0 auto;
    }

    > form img {
      width: 150px;
      margin: 0 auto;
      display: block;
    }

    > form h2 {
      color: ${theme.fontColor.third};
    }

    > form fieldset {
      margin-top: 50px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    }

    > form fieldset input {
      border-radius: 5px;
      font-size: 18px;
      padding: 5px;
      font-family: inherit;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }

    > form fieldset label {
      font-size: 18px;
    }

    .button-submit {
      background-color: ${theme.fontColor.third};
      color: #fff;
      font-size: 18px;
      font-family: inherit;
      margin-top: 45px;
      cursor: pointer;
    }

    .button-submit:hover {
      border: 1px solid ${theme.fontColor.third};
      background-color: #fff;
      color: ${theme.fontColor.third};
    }

    .error {
      color: red;
      font-size: 14px;
      display: none;
    }
  `}
`;

export const Alert = styled.span`
  ${({ theme }) => css`
    color: red;
    text-align: center;
  `}
`;
