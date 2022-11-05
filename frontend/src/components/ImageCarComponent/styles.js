import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 60%;
    width: 100%;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0px 0px;
    }
  `}
`;
