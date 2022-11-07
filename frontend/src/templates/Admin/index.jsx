import P from "prop-types";
import { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import * as Styled from "./styles";

export const Admin = ({}) => {
  const token = JSON.parse(localStorage.getItem("user_token"));

  return (
    <Styled.Container>
      <h1>Admin Page</h1>
      {!token && <Navigate replace to="/admin" />}
    </Styled.Container>
  );
};

Admin.propTypes = {};
