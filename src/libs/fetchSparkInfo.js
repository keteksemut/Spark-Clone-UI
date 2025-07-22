export const fetchSparkInfo = async () => {
  try {
    const response = await fetch("https://info-sky.blockanalitica.com/api/v1/spark-info/", {
      method: "GET",
    });

    if (!response.ok) {
      console.error(`SPARK API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json() || {};

    const parse = formatValue; // alias for clarity

    const {
      spark_revenue,
      sparklend_tvl,
      sparklend_tvl_gnosis,
      sparklend_usds_borrow_rate,
      sparklend_usds_borrow_rate_change,
      sparklend_available_liquidity,
      liquidity_layer,
      savings_tvl,
      morpho,
      aave,
      ssr,
      ssr_1year_avg,
      total_debt,
      revenue,
      sparklend_treasury,
      maker_revenue,
      base_rate,
      litepsm_reserve,
      ssr_30d_avg
    } = data;

    const sparklendTvlTotal =
      sparklend_tvl && sparklend_tvl_gnosis
        ? parse((parseFloat(sparklend_tvl) + parseFloat(sparklend_tvl_gnosis)).toString())
        : null;

    return {
      sparkRevenue: parse(spark_revenue),
      sparklendTvl: parse(sparklend_tvl),
      sparklendTvlGnosis: parse(sparklend_tvl_gnosis),
      sparklendTvlTotal,
      sparklendUsdsBorrowRate: parse(sparklend_usds_borrow_rate),
      sparklendUsdsBorrowRateChange: parse(sparklend_usds_borrow_rate_change),
      sparklendAvailableLiquidity: parse(sparklend_available_liquidity),
      liquidityLayer: parse(liquidity_layer),
      savingsTvl: parse(savings_tvl),
      morpho: parse(morpho),
      aave: parse(aave),
      ssr: parse(ssr),
      ssr1yearAvg: parse(ssr_1year_avg),
      totalDebt: parse(total_debt),
      revenue: parse(revenue),
      sparklendTreasury: parse(sparklend_treasury),
      makerRevenue: parse(maker_revenue),
      baseRate: parse(base_rate),
      litepsmReserve: parse(litepsm_reserve),
      ssr30DaysAvg: parse(ssr_30d_avg),
    };
  } catch (error) {
    console.error("SPARK API Error loading data:", error);
    return null;
  }
};

function formatValue(value) {
  if (!value || value === "0E-18") return "";

  const num = parseFloat(value);
  if (isNaN(num)) return "";

  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num <= 1) {
    const percent = (num * 100).toFixed(2).replace(/\.?0+$/, "");
    return parseFloat(percent) < 0.01 ? null : `${percent}%`;
  }

  const rounded = Math.round(num * 100) / 100;
  return rounded % 1 === 0 ? rounded.toFixed(1) : rounded.toFixed(2);
}
