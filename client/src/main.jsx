import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import DataContextProvider from "./context/dataContext";
import "./sass/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </StrictMode>
);
