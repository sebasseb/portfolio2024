import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./providers/LanguageProvider.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <LanguageProvider>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </LanguageProvider>
    </NextUIProvider>
  </React.StrictMode>
);
