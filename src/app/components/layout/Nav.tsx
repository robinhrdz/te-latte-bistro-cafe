import { useState, useEffect } from "react";
import type { Page } from "../../../types";
import { Btn } from "../common/Btn";
import { HamburgerIcon, CloseIcon } from "../icons";

export function Nav({
  page,
  setPage,
}: {
  page: Page;
  setPage: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { key: Page; label: string }[] = [
    { key: "home", label: "Inicio" },
    { key: "menu", label: "Menú" },
    { key: "contacto", label: "Contacto" },
  ];

  const go = (key: Page) => {
    setPage(key);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const transparent = page === "home" && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className={`font-script text-3xl leading-none transition-all hover:opacity-80 ${
            transparent ? "text-white drop-shadow-md" : "text-primary"
          }`}
        >
          Te Latte
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ key, label }) => (
            <li key={key}>
              <button
                onClick={() => go(key)}
                className={`font-body text-sm font-semibold tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-transform after:duration-200 after:origin-left ${
                  page === key
                    ? `after:scale-x-100 ${transparent ? "text-white" : "text-primary"}`
                    : `after:scale-x-0 hover:after:scale-x-100 ${
                        transparent
                          ? "text-white/85 hover:text-white"
                          : "text-foreground hover:text-primary"
                      }`
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <Btn
          onClick={() => go("menu")}
          className={`hidden md:inline-flex text-sm px-5 py-2.5 ${
            transparent
              ? "border-2 border-white/60 text-white bg-transparent hover:bg-white hover:text-primary"
              : ""
          }`}
          variant={transparent ? "ghost" : "primary"}
        >
          Ver Menú
        </Btn>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1 transition-colors ${transparent ? "text-white" : "text-foreground"}`}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border px-6 py-5 flex flex-col gap-1">
          {links.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => go(key)}
              className={`font-body font-semibold text-lg text-left py-3.5 border-b border-border/50 transition-colors ${
                page === key ? "text-primary" : "text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <Btn onClick={() => go("menu")} className="mt-4 w-full">
            Ver Menú Completo
          </Btn>
        </div>
      )}
    </nav>
  );
}
