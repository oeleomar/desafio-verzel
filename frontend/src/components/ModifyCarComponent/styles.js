import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    > .background-wrapper {
      position: fixed;
      background: rgba(0, 0, 0, 0.7);
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    > .content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 350px;
      background-color: #fff;
      box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
      padding: 20px;
      border-radius: 5px;
    }

    .content__title {
      font-size: 22px;
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }

    .content__description {
      font-size: 16px;
      margin-bottom: 20px;
      color: #333;
    }

    .content__close {
      position: absolute;
      top: 5%;
      left: 85%;
      display: flex;
      color: rgb(205, 43, 49);
      background: transparent;
      border: none;
      cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  margin: 10px 0 5px 0;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 5px 10px;
`;

export const StyledButton = styled.input`
  ${({ theme }) => css`
    font-size: 18px;
    background-color: ${theme.fontColor.third};
    padding: 5px 10px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
  `}
`;

export const StyledMessageError = styled.span`
  color: red;
`;

export const StyledMessageSuccess = styled.span`
  color: green;
`;
