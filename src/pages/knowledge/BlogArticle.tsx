import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ARTICLE_KEYS = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"] as const;

const BlogArticle = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { t, isRTL } = useLanguage();

  const isValidArticle = articleId && ARTICLE_KEYS.includes(articleId as any);

  if (!isValidArticle) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <Button asChild>
              <Link to="/knowledge/blog">{t("blog.backToBlog")}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const title = t(`blog.articles.${articleId}.title`);
  const summary = t(`blog.articles.${articleId}.summary`);
  const category = t(`blog.articles.${articleId}.category`);
  const categoryLabel = t(`blog.categories.${category}`);
  const date = t(`blog.articles.${articleId}.date`);
  const readTime = t(`blog.articles.${articleId}.readTime`);
  const body = t(`blog.articles.${articleId}.body`);

  // Parse body into sections (split by \n\n, handle ## headings)
  const renderBody = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((p, i) => {
      // H2 heading
      if (p.startsWith("## ")) {
        return (
          <h2 key={i} className={cn("text-xl font-bold text-foreground mt-8 mb-3", isRTL && "text-right")}>
            {p.replace("## ", "")}
          </h2>
        );
      }
      // H3 heading
      if (p.startsWith("### ")) {
        return (
          <h3 key={i} className={cn("text-lg font-semibold text-foreground mt-6 mb-2", isRTL && "text-right")}>
            {p.replace("### ", "")}
          </h3>
        );
      }
      // Bold list items (lines starting with **)
      if (p.includes("**") && p.includes("\n")) {
        const lines = p.split("\n");
        return (
          <div key={i} className={cn("my-4", isRTL && "text-right")}>
            {lines.map((line, li) => {
              if (line.startsWith("**") && line.includes(":**")) {
                const [label, ...rest] = line.split(":**");
                return (
                  <p key={li} className="text-foreground mb-1">
                    <strong>{label.replace(/\*\*/g, "")}:</strong> {rest.join(":**").replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (line.startsWith("**")) {
                return (
                  <p key={li} className="font-semibold text-foreground mb-1">{line.replace(/\*\*/g, "")}</p>
                );
              }
              return <p key={li} className="text-muted-foreground mb-1">{line}</p>;
            })}
          </div>
        );
      }
      // Bullet list
      if (p.startsWith("- ")) {
        const items = p.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className={cn("list-disc space-y-1.5 my-4", isRTL ? "pr-6 text-right" : "pl-6")}>
            {items.map((item, li) => (
              <li key={li} className="text-muted-foreground">{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      // Regular paragraph
      return (
        <p key={i} className={cn("text-muted-foreground leading-relaxed my-4", isRTL && "text-right")}>
          {p}
        </p>
      );
    });
  };

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTJ2NGgyem0tMzAgMGgyVjBoLTJ2NHptMjcgMjVhMSAxIDAgMCAxLTIgMCAxIDEgMCAwIDEgMiAwem0tMjAgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Link
                to="/knowledge/blog"
                className={cn(
                  "inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm",
                  isRTL && "flex-row-reverse"
                )}
              >
                <BackArrow className="h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>

              <div className={cn("flex items-center gap-3 flex-wrap mb-4", isRTL && "flex-row-reverse")}>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {categoryLabel}
                </span>
                <div className={cn("flex items-center gap-1 text-white/80 text-sm", isRTL && "flex-row-reverse")}>
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{date}</span>
                </div>
                <div className={cn("flex items-center gap-1 text-white/80 text-sm", isRTL && "flex-row-reverse")}>
                  <Clock className="h-3.5 w-3.5" />
                  <span>{readTime} {t("blog.minRead")}</span>
                </div>
              </div>

              <h1 className={cn("text-3xl lg:text-4xl font-bold text-white", isRTL && "text-right")}>
                {title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              {/* Lead paragraph */}
              <p className={cn("text-lg text-foreground font-medium leading-relaxed mb-6 pb-6 border-b border-border", isRTL && "text-right")}>
                {summary}
              </p>

              {/* Body content */}
              <div className="prose-custom">
                {renderBody(body)}
              </div>

              {/* Back to blog CTA */}
              <div className={cn("mt-12 pt-8 border-t border-border", isRTL && "text-right")}>
                <Button asChild variant="outline" size="lg">
                  <Link to="/knowledge/blog" className={cn("inline-flex items-center gap-2", isRTL && "flex-row-reverse")}>
                    <BackArrow className="h-4 w-4" />
                    {t("blog.backToBlog")}
                  </Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogArticle;
