export function Btn({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold font-body transition-all duration-200 cursor-pointer select-none";
  const variants: Record<string, string> = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg active:scale-95",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95",
    ghost: "text-primary hover:bg-primary/10 active:scale-95",
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
