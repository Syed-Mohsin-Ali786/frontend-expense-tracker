import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import ExpenseProvider from "./context/ExpenseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <ExpenseProvider>
          <App />
        </ExpenseProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
