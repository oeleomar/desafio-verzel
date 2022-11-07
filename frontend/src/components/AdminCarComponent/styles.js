import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 300px;
    box-shadow: 0 1px 5px 0 rgba(70, 70, 70, 0.5);
    border-radius: 5px;

    :hover {
      box-shadow: 0 1px 10px 0 rgba(70, 70, 70, 0.5);
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    padding: 0px 15px;
    margin-top: 5px;
    height: 40%;
  `}
`;

export const ToolsComponent = styled.div`
  position: absolute;
  width: 300px;
`;
