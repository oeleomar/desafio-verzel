import styled, { css } from "styled-components";

export const Container = styled.span`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 14px;
    color: ${theme.fontColor.secundary};
  `}
`;
