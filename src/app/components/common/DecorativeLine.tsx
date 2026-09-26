import { LeafIcon } from "../icons";

export function DecorativeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 border-t border-dashed border-accent opacity-50" />
      <LeafIcon className="w-4 h-4 text-accent shrink-0 opacity-70" />
      <div className="flex-1 border-t border-dashed border-accent opacity-50" />
    </div>
  );
}
