import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface ChartDataPoint {
  date: string;
  rate: number;
  label: string;
}

const EIBORHistoricalChart = () => {
  const { t, isRTL } = useLanguage();
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const fromDate = sixMonthsAgo.toISOString().split("T")[0];

        const { data: rates, error } = await supabase
          .from("eibor_rates")
          .select("rate, rate_date")
          .eq("tenor", "3_month")
          .gte("rate_date", fromDate)
          .order("rate_date", { ascending: true });

        if (error || !rates) {
          console.error("Error fetching historical rates:", error);
          return;
        }

        const mapped: ChartDataPoint[] = rates.map((r) => ({
          date: r.rate_date,
          rate: Number(r.rate),
          label: new Date(r.rate_date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          }),
        }));

        setData(mapped);
      } catch (err) {
        console.error("Error fetching historical EIBOR data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return null;
  if (data.length === 0) return null;

  const minRate = Math.min(...data.map((d) => d.rate));
  const maxRate = Math.max(...data.map((d) => d.rate));
  const padding = 0.05;
  const yMin = Math.floor((minRate - padding) * 100) / 100;
  const yMax = Math.ceil((maxRate + padding) * 100) / 100;

  return (
    <AnimatedSection className="mt-10 max-w-6xl mx-auto">
      <div className="bg-card border border-border rounded-2xl shadow-card p-6">
        <div className={cn("flex items-center gap-2 mb-6", isRTL && "flex-row-reverse")}>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {t("eiborDashboard.historicalTitle")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("eiborDashboard.historicalSubtitle")}
            </p>
          </div>
        </div>

        {data.length < 5 ? (
          <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
            <p>{t("eiborDashboard.historicalLimited")}</p>
          </div>
        ) : (
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={[yMin, yMax]}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickFormatter={(v: number) => `${v.toFixed(2)}%`}
                  width={60}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.75rem",
                    fontSize: "0.875rem",
                  }}
                  formatter={(value: number) => [`${value.toFixed(4)}%`, "3M EIBOR"]}
                  labelFormatter={(label: string) => label}
                />
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2.5}
                  fill="url(#rateGradient)"
                  dot={data.length < 30 ? { r: 3, fill: "hsl(var(--primary))" } : false}
                  activeDot={{ r: 5, fill: "hsl(var(--primary))" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default EIBORHistoricalChart;
