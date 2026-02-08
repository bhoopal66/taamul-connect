import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const CBUAE_EIBOR_URL = "https://www.centralbank.ae/en/forex-eibor/eibor-rates/";

const TENOR_MAP: Record<string, string> = {
  "O/N": "overnight",
  "1 Week": "1_week",
  "1 Month": "1_month",
  "3 Months": "3_month",
  "6 Months": "6_month",
  "1 Year": "1_year",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const firecrawlKey = Deno.env.get("FIRECRAWL_API_KEY");
    if (!firecrawlKey) {
      throw new Error("FIRECRAWL_API_KEY not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log("Scraping CBUAE EIBOR page...");

    // Use Firecrawl to scrape the CBUAE page with JSON extraction
    const scrapeResponse = await fetch("https://api.firecrawl.dev/v1/scrape", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${firecrawlKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: CBUAE_EIBOR_URL,
        formats: ["json"],
        jsonOptions: {
          schema: {
            type: "object",
            properties: {
              latest_date: { type: "string", description: "The most recent date in the EIBOR rates table (format: DD Month YYYY)" },
              overnight: { type: "number", description: "The O/N (overnight) EIBOR rate for the latest date" },
              one_week: { type: "number", description: "The 1 Week EIBOR rate for the latest date" },
              one_month: { type: "number", description: "The 1 Month EIBOR rate for the latest date" },
              three_months: { type: "number", description: "The 3 Months EIBOR rate for the latest date" },
              six_months: { type: "number", description: "The 6 Months EIBOR rate for the latest date" },
              one_year: { type: "number", description: "The 1 Year EIBOR rate for the latest date" },
              previous_date: { type: "string", description: "The second most recent date in the current month EIBOR table" },
              prev_overnight: { type: "number", description: "The O/N rate for the previous date" },
              prev_one_week: { type: "number", description: "The 1 Week rate for the previous date" },
              prev_one_month: { type: "number", description: "The 1 Month rate for the previous date" },
              prev_three_months: { type: "number", description: "The 3 Months rate for the previous date" },
              prev_six_months: { type: "number", description: "The 6 Months rate for the previous date" },
              prev_one_year: { type: "number", description: "The 1 Year rate for the previous date" },
            },
            required: ["latest_date", "overnight", "one_month", "three_months", "six_months", "one_year"],
          },
          prompt: "Extract the EIBOR rates from the 'Current month' table. Get the latest (most recent) row and the row before it. The table columns are: Date, O/N, 1 Week, 1 Month, 3 Months, 6 Months, 1 Year, Value Date.",
        },
        waitFor: 3000,
      }),
    });

    const scrapeData = await scrapeResponse.json();

    if (!scrapeResponse.ok) {
      console.error("Firecrawl error:", JSON.stringify(scrapeData));
      throw new Error(`Firecrawl request failed [${scrapeResponse.status}]: ${JSON.stringify(scrapeData)}`);
    }

    const extracted = scrapeData?.data?.json || scrapeData?.json;
    if (!extracted || !extracted.latest_date) {
      console.error("No data extracted. Full response:", JSON.stringify(scrapeData).slice(0, 500));
      throw new Error("Failed to extract EIBOR data from CBUAE page");
    }

    console.log("Extracted EIBOR data:", JSON.stringify(extracted));

    // Parse date - handle "DD Month YYYY" format
    const parseDate = (dateStr: string): string => {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) {
        return d.toISOString().split("T")[0];
      }
      // Fallback: today
      return new Date().toISOString().split("T")[0];
    };

    const rateDate = parseDate(extracted.latest_date);

    // Map extracted data to tenor records
    const tenorData = [
      { tenor: "overnight", rate: extracted.overnight, prev: extracted.prev_overnight },
      { tenor: "1_week", rate: extracted.one_week, prev: extracted.prev_one_week },
      { tenor: "1_month", rate: extracted.one_month, prev: extracted.prev_one_month },
      { tenor: "3_month", rate: extracted.three_months, prev: extracted.prev_three_months },
      { tenor: "6_month", rate: extracted.six_months, prev: extracted.prev_six_months },
      { tenor: "1_year", rate: extracted.one_year, prev: extracted.prev_one_year },
    ];

    // Upsert rates
    const ratesToUpsert = tenorData
      .filter((t) => t.rate != null)
      .map((t) => ({
        rate_date: rateDate,
        tenor: t.tenor,
        rate: t.rate,
        previous_rate: t.prev ?? null,
        daily_change: t.prev != null ? parseFloat((t.rate - t.prev).toFixed(6)) : 0,
      }));

    console.log(`Upserting ${ratesToUpsert.length} rate records for ${rateDate}`);

    const { error: upsertError } = await supabase
      .from("eibor_rates")
      .upsert(ratesToUpsert, { onConflict: "rate_date,tenor" });

    if (upsertError) {
      console.error("Upsert error:", upsertError);
      throw new Error(`Database upsert failed: ${upsertError.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        date: rateDate,
        rates_count: ratesToUpsert.length,
        rates: ratesToUpsert,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching EIBOR rates:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
