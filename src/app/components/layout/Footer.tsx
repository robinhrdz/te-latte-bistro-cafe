import type { Page } from "../../../types";
import { InstagramIcon, FacebookIcon, MapPinIcon } from "../icons";

export function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const go = (key: Page) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => go("home")}
              className="font-script text-5xl text-white hover:opacity-80 transition-opacity block mb-1 leading-none"
            >
              Te Latte
            </button>
            <p className="font-display italic text-white/45 text-sm mb-5">Bistro Café</p>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Un espacio donde el café de especialidad se encuentra con el sabor artesanal y la calidez del hogar.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/45 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-white/45 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body font-semibold text-white/50 text-xs tracking-[0.25em] uppercase mb-5">
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {(
                [
                  { key: "home", label: "Inicio" },
                  { key: "menu", label: "Menú" },
                  { key: "contacto", label: "Contacto" },
                ] as { key: Page; label: string }[]
              ).map(({ key, label }) => (
                <li key={key}>
                  <button
                    onClick={() => go(key)}
                    className="font-body text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + location */}
          <div>
            <h3 className="font-body font-semibold text-white/50 text-xs tracking-[0.25em] uppercase mb-5">
              Horario
            </h3>
            <ul className="flex flex-col gap-2 font-body text-sm text-white/50">
              <li className="flex justify-between gap-3">
                <span>Lun – Vie</span>
                <span>7am – 9pm</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Sábado</span>
                <span>8am – 10pm</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Domingo</span>
                <span>9am – 8pm</span>
              </li>
            </ul>
            <div className="mt-6 flex items-start gap-2 text-white/45">
              <span className="shrink-0 mt-0.5">
                <MapPinIcon />
              </span>
              <span className="font-body text-sm leading-relaxed">
                Calle Café 123, Col. Centro, Ciudad de México
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-white/30 text-xs">
            © 2025 Te Latte Bistro Café. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/30 text-xs">Hecho con ☕ y mucho amor</p>
        </div>
      </div>
    </footer>
  );
}
