import { createRoot } from "react-dom/client";
// import HomePage from "./pages/LoginPage";
import { StrictMode } from "react";
import "./assets/globals.css";
import RouterConfig  from "./router";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
)
