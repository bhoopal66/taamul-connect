import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface BlogSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isRTL: boolean;
}

const BlogSearchBar = ({ value, onChange, placeholder, isRTL }: BlogSearchBarProps) => (
  <div className="relative max-w-md w-full">
    <Search className={cn(
      "absolute top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
      isRTL ? "right-3" : "left-3"
    )} />
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn(
        "h-11 rounded-xl border-border bg-card",
        isRTL ? "pr-10 text-right" : "pl-10"
      )}
    />
  </div>
);

export default BlogSearchBar;
