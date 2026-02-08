import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedItem } from "@/components/ui/animated-section";

interface BlogArticleCardProps {
  articleKey: string;
  title: string;
  summary: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  minReadLabel: string;
  readMoreLabel: string;
  index: number;
  isRTL: boolean;
}

const categoryColors: Record<string, string> = {
  financing: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  market: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  sme: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  tips: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  regulation: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const BlogArticleCard = ({
  articleKey,
  title,
  summary,
  categoryLabel,
  date,
  readTime,
  minReadLabel,
  readMoreLabel,
  index,
  isRTL,
}: BlogArticleCardProps) => {
  const categoryKey = Object.keys(categoryColors).find((k) =>
    categoryLabel.toLowerCase().includes(k)
  );
  const colorClass = categoryColors[categoryKey || "financing"] || categoryColors.financing;

  return (
    <AnimatedItem index={index}>
      <Link to={`/knowledge/blog/${articleKey}`} className="block h-full">
      <article className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 h-full flex flex-col">
        {/* Color accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary to-accent" />

        <div className={cn("p-6 flex flex-col flex-1", isRTL && "text-right")}>
          {/* Meta row */}
          <div className={cn("flex items-center gap-3 mb-4", isRTL && "flex-row-reverse")}>
            <span className={cn("px-3 py-1 rounded-full text-xs font-medium", colorClass)}>
              {categoryLabel}
            </span>
            <span className="text-xs text-muted-foreground">{date}</span>
            <div className={cn("flex items-center gap-1 text-xs text-muted-foreground", isRTL && "flex-row-reverse")}>
              <Clock className="h-3 w-3" />
              <span>{readTime} {minReadLabel}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
            {summary}
          </p>

          {/* Read more */}
          <div className={cn("flex items-center gap-1 text-sm font-medium text-primary", isRTL && "flex-row-reverse")}>
            <span>{readMoreLabel}</span>
            <ArrowRight className={cn("h-4 w-4 transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
          </div>
        </div>
      </article>
      </Link>
    </AnimatedItem>
  );
};

export default BlogArticleCard;
