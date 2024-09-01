import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConnectConfirm from "./app/connect_confirm/Connect_confirm";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConnectConfirm />
  </StrictMode>
);
