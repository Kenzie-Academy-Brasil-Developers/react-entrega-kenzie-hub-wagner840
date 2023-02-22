import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePageProvider } from "./providers/HomePageContext";
import { TechProvider } from "./providers/TechContext";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <HomePageProvider>
            <App />
          </HomePageProvider>
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
