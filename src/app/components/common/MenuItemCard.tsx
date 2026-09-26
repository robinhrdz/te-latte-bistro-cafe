import type { MenuItem } from "../../../types";
import { LeafIcon } from "../icons";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex gap-4 p-4 bg-card rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted flex items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <LeafIcon className="w-6 h-6 text-accent opacity-40" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-display font-bold text-foreground text-base leading-snug">{item.name}</h4>
          <span className="text-primary font-bold font-body text-sm shrink-0 mt-0.5">{item.price}</span>
        </div>
        <p className="text-muted-foreground text-sm font-body mt-1.5 leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}
