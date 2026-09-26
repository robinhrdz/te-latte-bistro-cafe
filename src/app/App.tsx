import { useState } from "react";
import type { Page } from "../types";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { ContactoPage } from "../pages/ContactoPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-background font-body">
      <Nav page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "menu" && <MenuPage />}
      {page === "contacto" && <ContactoPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
