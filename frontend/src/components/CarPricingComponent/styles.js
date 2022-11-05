import styled, { css } from "styled-components";

export const Container = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontColor.third};
    font-weight: 600;
    margin-top: 30px;
  `}
`;
