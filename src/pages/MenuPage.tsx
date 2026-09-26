import { useState } from "react";
import type { MenuItem, MenuTab } from "../types";
import { MENU_BY_TAB, MENU_TABS } from "../data/menuData";
import { DecorativeLine } from "../app/components/common/DecorativeLine";
import { Wave } from "../app/components/common/Wave";
import { MenuItemCard } from "../app/components/common/MenuItemCard";
import { ProductModal } from "../app/components/common/ProductModal";
import { HotCupIcon, IcedCupIcon, PlateIcon } from "../app/components/icons";

const TAB_ICONS: Record<MenuTab, (small: boolean) => React.ReactNode> = {
  calientes: (small) => <HotCupIcon small={small} />,
  chocolates: (small) => <HotCupIcon small={small} />,
  "frios-clasicos": (small) => <IcedCupIcon small={small} />,
  "frios-elaborados": (small) => <IcedCupIcon small={small} />,
  matchas: (small) => <IcedCupIcon small={small} />,
  sandwiches: (small) => <PlateIcon small={small} />,
  postres: (small) => <PlateIcon small={small} />,
};

export function MenuPage() {
  const [tab, setTab] = useState<MenuTab>("calientes");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const activeTab = MENU_TABS.find((t) => t.key === tab)!;

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <div className="bg-card py-16 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
          — Lo que preparamos —
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-4">
          Nuestro Menú
        </h1>
        <DecorativeLine className="max-w-xs mx-auto" />
        <p className="font-body text-muted-foreground mt-6 max-w-md mx-auto leading-relaxed">
          Ingredientes frescos, recetas artesanales y mucho amor en cada preparación.
        </p>
      </div>

      <Wave containerClass="bg-card" fillClass="text-background" />

      {/* Sticky tabs */}
      <div className="sticky top-[72px] z-40 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {MENU_TABS.map(({ key, label, shortLabel }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2.5 px-5 py-4 font-body font-semibold text-sm whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                  tab === key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={tab === key ? "text-primary" : "text-muted-foreground"}>
                  {TAB_ICONS[key](true)}
                </span>
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-2">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary">{TAB_ICONS[tab](false)}</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {activeTab.label}
          </h2>
        </div>
        <DecorativeLine />
      </div>

      {/* Items grid */}
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MENU_BY_TAB[tab].map((item) => (
            <MenuItemCard key={item.name} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>

      <Wave containerClass="bg-background" fillClass="text-foreground" />

      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
