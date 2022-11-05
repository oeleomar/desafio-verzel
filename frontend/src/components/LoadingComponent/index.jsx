import React from "react";
import ReactLoading from "react-loading";
import * as Styled from "./styles";

export const LoadingComponent = () => {
  return (
    <Styled.Container>
      <ReactLoading type="spin" color="#3374db" height={100} width={100} />
    </Styled.Container>
  );
};
