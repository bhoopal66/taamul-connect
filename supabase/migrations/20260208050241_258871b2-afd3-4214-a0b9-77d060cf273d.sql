-- Table to store daily EIBOR rates
CREATE TABLE public.eibor_rates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  rate_date DATE NOT NULL,
  tenor TEXT NOT NULL, -- 'overnight', '1_month', '3_month', '6_month', '1_year'
  rate NUMERIC(8, 4) NOT NULL,
  previous_rate NUMERIC(8, 4),
  daily_change NUMERIC(8, 4) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(rate_date, tenor)
);

-- Index for fast lookups
CREATE INDEX idx_eibor_rates_date ON public.eibor_rates (rate_date DESC);

-- Enable RLS but allow public read access (rates are public data)
ALTER TABLE public.eibor_rates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "EIBOR rates are publicly readable"
  ON public.eibor_rates FOR SELECT
  USING (true);

-- Table to store bank panel fixings
CREATE TABLE public.eibor_bank_fixings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  rate_date DATE NOT NULL,
  bank_name TEXT NOT NULL,
  three_month_rate NUMERIC(8, 4) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(rate_date, bank_name)
);

CREATE INDEX idx_eibor_bank_fixings_date ON public.eibor_bank_fixings (rate_date DESC);

ALTER TABLE public.eibor_bank_fixings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Bank fixings are publicly readable"
  ON public.eibor_bank_fixings FOR SELECT
  USING (true);