import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    > .background-wrapper {
      position: fixed;
      background: rgba(0, 0, 0, 0.7);
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 9;
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
      z-index: 10;
    }

    > .content .content__title {
      font-size: 20px;
      color: #333;
      margin-bottom: 20px;
    }

    > .content .content__description {
      font-size: 16px;
      margin-bottom: 20px;
      color: #333;
    }

    > .content .content__button-action {
      color: rgb(205, 43, 49);
      background-color: rgb(255, 229, 229);
      font-size: 18px;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }

    > content .content__button-cancel {
    }

    .pencil {
      position: absolute;
      left: 70%;
      top: 0%;
      margin-top: 5px;
      background-color: ${theme.fontColor.third};
      border-radius: 5px;
      color: #fff;
    }
  `}
`;

export const TrashContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 85%;
    top: 0;
    margin-top: 5px;
    background-color: rgb(205, 43, 49);
    border-radius: 5px;
    color: rgb(255, 229, 229);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const ButtonCancel = styled.button`
  color: #333;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
