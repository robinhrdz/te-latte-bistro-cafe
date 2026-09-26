import type { Page } from "../types";
import { useSpecialties } from "../hooks/useSpecialties";
import { Btn } from "../app/components/common/Btn";
import { DecorativeLine } from "../app/components/common/DecorativeLine";
import { Wave } from "../app/components/common/Wave";
import { ProductCard } from "../app/components/common/ProductCard";
import { LeafIcon } from "../app/components/icons";

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const { specialties, loading } = useSpecialties();
  const go = (key: Page) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
        <video
          src="/videos/hero.mov"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/65" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-white/70 mb-5">
            ✦ &nbsp;Bienvenido a&nbsp; ✦
          </p>
          <h1 className="font-script text-[5.5rem] md:text-[8rem] text-white leading-none drop-shadow-2xl mb-1">
            Te Latte
          </h1>
          <p className="font-display text-xl md:text-2xl text-white/80 italic font-normal mb-7">
            Bistro Café
          </p>
          <DecorativeLine className="max-w-xs mx-auto mb-8 opacity-40" />
          <p className="font-body text-white/75 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
            Un rincón cálido donde cada taza cuenta una historia. Café de especialidad, sabores artesanales y momentos que perduran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Btn onClick={() => go("menu")} className="text-base px-8 py-3.5">
              Explorar Menú
            </Btn>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">Descubre</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>

        {/* Fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Specialties ── */}
      <section className="bg-background pt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
              — Esta semana —
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold">
              Especialidades
            </h2>
            <DecorativeLine className="max-w-xs mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <p className="col-span-full text-center text-muted-foreground">Cargando...</p>
            ) : (
              specialties.map((item) => <ProductCard key={item.name} item={item} />)
            )}
          </div>

          <div className="text-center mt-12">
            <Btn onClick={() => go("menu")} variant="outline">
              Ver Menú Completo
            </Btn>
          </div>
        </div>
      </section>

      <Wave containerClass="bg-background" fillClass="text-card" />

      <Wave containerClass="bg-card" fillClass="text-background" />

      {/* ── Quote ── */}
      <section className="bg-background py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <LeafIcon className="w-10 h-10 text-accent mx-auto mb-6 opacity-55" />
          <blockquote className="font-script text-5xl md:text-6xl text-primary leading-relaxed">
            "El café es un abrazo en taza"
          </blockquote>
          <p className="font-body text-accent/70 text-xs tracking-[0.35em] uppercase mt-6">
            — Te Latte Bistro Café —
          </p>
        </div>
      </section>

      <Wave containerClass="bg-background" fillClass="text-foreground" />
    </>
  );
}
