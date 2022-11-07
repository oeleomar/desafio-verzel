import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 80%;
    border-radius: 20px;
    padding: 10px 5px;
    font-size: 18px;
    font-family: inherit;
    margin: 0 auto;
    margin-top: 50px;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;
