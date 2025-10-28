import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
