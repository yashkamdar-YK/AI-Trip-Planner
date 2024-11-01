import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Navbar from "./components/shared/Navbar";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      
      <Toaster />
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);


// An AI Trip Planner Which Plan Your Trip According To your Need   AI-Trip-Planner