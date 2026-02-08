import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import BlogSearchBar from "@/components/blog/BlogSearchBar";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogArticleCard from "@/components/blog/BlogArticleCard";

const ARTICLE_KEYS = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"] as const;
const CATEGORY_KEYS = ["financing", "market", "sme", "tips", "regulation"] as const;

const Blog = () => {
  const { t, isRTL } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = CATEGORY_KEYS.map((key) => ({
    key,
    label: t(`blog.categories.${key}`),
  }));

  const articles = useMemo(() => {
    return ARTICLE_KEYS.map((key) => ({
      key,
      title: t(`blog.articles.${key}.title`),
      summary: t(`blog.articles.${key}.summary`),
      category: t(`blog.articles.${key}.category`),
      categoryLabel: t(`blog.categories.${t(`blog.articles.${key}.category`)}`),
      date: t(`blog.articles.${key}.date`),
      readTime: t(`blog.articles.${key}.readTime`),
    }));
  }, [t]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === "all" || a.category === activeCategory;
      const matchesSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, search]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTJ2NGgyem0tMzAgMGgyVjBoLTJ2NHptMjcgMjVhMSAxIDAgMCAxLTIgMCAxIDEgMCAwIDEgMiAwem0tMjAgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={cn("text-center max-w-3xl mx-auto", isRTL && "text-right")}
            >
              <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6", isRTL && "flex-row-reverse")}>
                <FileText className="h-4 w-4" />
                {t("nav.blog")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {t("blog.heroTitle")}
              </h1>
              <p className="text-lg text-white">
                {t("blog.heroDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className={cn("flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", isRTL && "md:flex-row-reverse")}>
              <BlogCategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
                allLabel={t("blog.allCategories")}
                isRTL={isRTL}
              />
              <BlogSearchBar
                value={search}
                onChange={setSearch}
                placeholder={t("blog.searchPlaceholder")}
                isRTL={isRTL}
              />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filtered.map((article, i) => (
                  <BlogArticleCard
                    key={article.key}
                    articleKey={article.key}
                    title={article.title}
                    summary={article.summary}
                    categoryLabel={article.categoryLabel}
                    date={article.date}
                    readTime={article.readTime}
                    minReadLabel={t("blog.minRead")}
                    readMoreLabel={t("blog.readMore")}
                    index={i}
                    isRTL={isRTL}
                  />
                ))}
              </div>
            ) : (
              <AnimatedSection className="text-center py-16">
                <p className="text-muted-foreground text-lg">{t("blog.noResults")}</p>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Blog;
