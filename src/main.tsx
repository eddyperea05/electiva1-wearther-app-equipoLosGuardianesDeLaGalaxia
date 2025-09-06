import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Card } from "./components/Card";
import { WeatherDates } from "./components/WeatherDates";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card />
    <WeatherDates/>
  </StrictMode>
);
