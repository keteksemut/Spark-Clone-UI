"use client"

import { useEffect, useState } from "react";
import json from "../../../public/gJSON.json";


const fetchSparkInfo = async () => {
  try {
    const response = await fetch("https://info-sky.blockanalitica.com/api/v1/spark-info/", {
      method: "get" // HTTP GET method
    });

    // Check if the network request was successful (status code 200-299)
    if (!response.ok) {
      console.error(`Spark API error: ${response.status} ${response.statusText}`);
      return null;
    }

    // Parse the JSON response body. If the JSON is empty or null, default to an empty object.
    const data = await response.json() || {};

    // Format and return the relevant Spark data fields.
    // `formatValue` is expected to handle the actual formatting logic (e.g., adding $, b, m, %).
    return {
      sparkRevenue: formatValue(data.spark_revenue),
      sparkLendTvl: formatValue(data.sparklend_tvl),
      sparkLendTvlGnosis: formatValue(data.sparklend_tvl_gnosis),
      // Calculate total Spark Lend TVL if both Gnosis and non-Gnosis TVL exist.
      sparkLendTvlTotal: data.sparklend_tvl && data.sparklend_tvl_gnosis ?
        formatValue((parseFloat(data.sparklend_tvl) + parseFloat(data.sparklend_tvl_gnosis)).toString()) :
        null,
      sparkLendUsdsBorrowRate: formatValue(data.sparklend_usds_borrow_rate),
      sparkLendUsdsBorrowRateChange: formatValue(data.sparklend_usds_borrow_rate_change),
      sparkLendAvailableLiquidity: formatValue(data.sparklend_available_liquidity),
      liquidityLayer: formatValue(data.liquidity_layer),
      savingsTvl: formatValue(data.savings_tvl),
      morpho: formatValue(data.morpho),
      aave: formatValue(data.aave),
      ssr: formatValue(data.ssr),
      ssr1YearAvg: formatValue(data.ssr_1year_avg),
      totalDebt: formatValue(data.total_debt),
      revenue: formatValue(data.revenue),
      sparkLendTreasury: formatValue(data.sparklend_treasury),
      makerRevenue: formatValue(data.maker_revenue),
      baseRate: formatValue(data.base_rate),
      litePsmReserve: formatValue(data.litepsm_reserve),
      ssr30DaysAvg: formatValue(data.ssr_30d_avg)
    };
  } catch (error) {
    // Catch any errors that occur during the fetch operation or JSON parsing.
    console.error("Spark API error loading data:", error);
    return null;
  }
};

function formatValue(value) {
  // If the value is null, undefined, an empty string, or "0e-18", return an empty string.
  if (!value || value === "0e-18") {
    return "";
  }

  // Convert the input value to a floating-point number.
  const num = parseFloat(value);

  // If the conversion results in NaN (Not-a-Number), return an empty string.
  if (isNaN(num)) {
    return "";
  }

  // If the number is 1 billion or greater, format it as "$X.XXb".
  if (num >= 1e9) {
    const formattedNum = (Math.round((num / 1e9) * 100) / 100).toFixed(2);
    return `$${formattedNum}b`;
  }

  // If the number is 1 million or greater, format it as "$X.XXm".
  if (num >= 1e6) {
    const formattedNum = (Math.round((num / 1e6) * 100) / 100).toFixed(2);
    return `$${formattedNum}m`;
  }

  // If the number is 1 or less, format it as "X.XX%" (percentage).
  if (num <= 1) {
    // Convert to percentage, remove trailing zeros, and ensure it's not less than 0.01%.
    const percentage = (num * 100).toFixed(2).replace(/\.?0+$/, "");
    return parseFloat(percentage) < 0.01 ? null : `${percentage}%`;
  }

  // For other numbers, round to two decimal places.
  const roundedNum = Math.round(num * 100) / 100;

  // If the rounded number is an integer, format it with one decimal place (e.g., 5.0).
  // Otherwise, format it with two decimal places and remove trailing zeros (e.g., 5.25, 5.2).
  return roundedNum % 1 === 0 ? roundedNum.toFixed(1) : parseFloat(roundedNum.toFixed(2)).toString();
}

const data = JSON.parse(json);

export const Layout = ({ children }) => {
    const [u, c] = useState(true);
    const [d, f] = useState(null != sparkInfo ? sparkInfo : null);

    useEffect(() => {
        document.getElementById("not-found") && c(false)
    }, [u]);

    useEffect(() => {
        const e = async () => {
            f(await fetchSparkInfo())
        };

        sparkinfo || settimeout(() => {
            e()
        }, 100)
    }, [sparkinfo]);

    return (
        <K>
            <En
                navigation={data.G}
                socials={data.UY}
                mainLinks={data.$o}
                banner={formatValue}
                learn={data.nf}
                id="header"
                buttons={null}
                sparkInfo={d}
            />

            <main>
                {children}
            </main>

            {u && (
                <Y content={s} />
            )}
        </K>
    )
}
