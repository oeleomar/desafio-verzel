import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    .trigger {
      background-color: ${theme.fontColor.third};
      padding: 5px 10px;
      font-size: 18px;
      font-family: inherit;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 50px;
  `}
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  @media screen and (max-width: 900px) {
    justify-content: center;
    margin-top: 50px;
  }
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.fontColor.third};
    padding: 5px 10px;
    font-size: 18px;
    font-family: inherit;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `}
`;
