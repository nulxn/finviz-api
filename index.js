const endpoints = {
  fv: "https://finviz.com/api/",
};

/**
 * Get financial statement data for a stock
 *
 * @param {string} ticker - Stock ticker
 * @param {Object} [params={mode: "no-cors"}] - Fetch API options
 * @returns {Promise<Object>} - A promise that resolves to the financial statement data
 */
async function statement(ticker, params = { mode: "no-cors" }) {
  let response = await fetch(
    `${endpoints.fv}statement.ashx?t=${ticker}`,
    params
  );
  let data = await response.json();
  return data;
}

/**
 * Get quote data for a stock or cryptocurrency
 *
 * @param {string} ticker - Stock/Crypto ticker
 * @param {string} [instrument="stock"] - Instrument type (stock[default] or crypto)
 * @param {Object} [params={mode: "no-cors"}] - Fetch API options
 * @returns {Promise<Object>} - A promise that resolves to the quote data
 */
async function quote(
  ticker,
  instrument = "stock",
  params = { mode: "no-cors" }
) {
  let response = await fetch(
    `${endpoints.fv}quote.ashx?instrument=${instrument}&ticker=${ticker}&timeframe=d&type=new`,
    params
  );
  let data = await response.json();
  return data;
}

module.exports = {
  statement,
  quote,
};
