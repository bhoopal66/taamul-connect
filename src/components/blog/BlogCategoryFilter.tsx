import { cn } from "@/lib/utils";

interface BlogCategoryFilterProps {
  categories: { key: string; label: string }[];
  activeCategory: string;
  onSelect: (key: string) => void;
  allLabel: string;
  isRTL: boolean;
}

const BlogCategoryFilter = ({ categories, activeCategory, onSelect, allLabel, isRTL }: BlogCategoryFilterProps) => (
  <div className={cn("flex flex-wrap gap-2", isRTL && "flex-row-reverse")}>
    <button
      onClick={() => onSelect("all")}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        activeCategory === "all"
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      )}
    >
      {allLabel}
    </button>
    {categories.map((cat) => (
      <button
        key={cat.key}
        onClick={() => onSelect(cat.key)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          activeCategory === cat.key
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default BlogCategoryFilter;
