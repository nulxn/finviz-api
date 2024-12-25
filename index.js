const endpoints = {
  fv: "https://finviz.com/api/",
};

/**
 * Get financial statement data for a stock
 *
 * @param {string} ticker - Stock ticker
 * @returns {Promise<Object>} - A promise that resolves to the financial statement data
 */
async function statement(ticker) {
  let response = await fetch(`${endpoints.fv}statement.ashx?t=${ticker}`);
  let data = await response.json();
  return data;
}

/**
 * Get quote data for a stock or cryptocurrency
 *
 * @param {string} ticker - Stock/Crypto ticker
 * @param {string} [instrument="stock"] - Instrument type (stock[default] or crypto)
 * @returns {Promise<Object>} - A promise that resolves to the quote data
 */
async function quote(ticker, instrument = "stock") {
  let response = await fetch(
    `${endpoints.fv}quote.ashx?instrument=${instrument}&ticker=${ticker}&timeframe=d&type=new`
  );
  let data = await response.json();
  return data;
}

module.exports = {
  statement,
  quote,
};
