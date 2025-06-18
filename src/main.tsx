import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
 import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar.tsx";
import FooterSection from "./components/FooterSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    <FooterSection />
  </StrictMode>
);
