import { cn } from "@/lib/utils";

interface PetTypeBadgeProps {
  type: "perro" | "gato";
  size?: "sm" | "md";
}

export function PetTypeBadge({ type, size = "md" }: PetTypeBadgeProps) {
  const isDog = type === "perro";
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        sizeClasses[size],
        isDog 
          ? "bg-dog-light text-dog" 
          : "bg-cat-light text-cat"
      )}
    >
      <span>{isDog ? "🐕" : "🐈"}</span>
      <span className="capitalize">{type}</span>
    </span>
  );
}
