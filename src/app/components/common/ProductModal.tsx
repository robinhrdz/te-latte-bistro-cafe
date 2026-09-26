import { useEffect } from "react";
import type { MenuItem } from "../../../types";
import { assetUrl } from "../../../lib/assetUrl";
import { DecorativeLine } from "./DecorativeLine";
import { CloseIcon, LeafIcon } from "../icons";

export function ProductModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl overflow-hidden shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 shrink-0 bg-muted">
          {item.image ? (
            <img src={assetUrl(item.image)} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <LeafIcon className="w-14 h-14 text-accent opacity-40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-bold text-foreground text-2xl leading-snug">{item.name}</h3>
            <span className="shrink-0 bg-primary text-primary-foreground text-sm font-bold font-body px-3 py-1.5 rounded-full">
              {item.price}
            </span>
          </div>
          <DecorativeLine />
          <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
