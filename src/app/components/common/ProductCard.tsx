import type { MenuItem } from "../../../types";
import { LeafIcon } from "../icons";

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col border border-border/40">
      <div className="relative h-52 overflow-hidden bg-muted shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <LeafIcon className="w-10 h-10 text-accent opacity-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-bold font-body px-3 py-1 rounded-full shadow">
          {item.price}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-bold text-foreground text-lg leading-snug">{item.name}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}
