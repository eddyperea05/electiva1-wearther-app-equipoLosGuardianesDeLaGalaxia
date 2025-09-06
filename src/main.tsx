import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Card } from "./components/Card";
import { Contendor } from "./components/Contendor";

createRoot(document.getElementById("root")!).render(
  <StrictMode >
    <Contendor />
  </StrictMode>
);
