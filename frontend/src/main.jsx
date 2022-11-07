import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./templates/Home/";
import { theme } from "./styles/theme";
import { AdminLogin } from "./templates/AdminLogin";
import { Page404 } from "./templates/Page404";
import { Admin } from "./templates/Admin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/home" element={<Admin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
