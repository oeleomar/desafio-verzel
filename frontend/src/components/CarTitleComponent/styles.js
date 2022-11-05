import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.fontColor.primary};
    font-size: 16px;
  `}
`;
