const endpoints = {
  fv: "https://finviz.com/api/",
};

/**
 * Get financial statement data for a stock
 *
 * @param {string} ticker - Stock ticker
 * @param {Object} [params={}] - Fetch API options
 * @param {boolean} [corsBypass=false] - Attempt to bypass CORS (allOrigins)
 * @returns {Promise<Object>} - A promise that resolves to the financial statement data
 */
async function statement(ticker, params = {}, corsBypass = false) {
  let response;
  if (corsBypass) {
    response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${endpoints.fv}statement.ashx?t=${ticker}`
      )}`,
      params
    );
  } else {
    response = await fetch(`${endpoints.fv}statement.ashx?t=${ticker}`, params);
  }

  let data = await response.json();
  return data;
}

/**
 * Get quote data for a stock or cryptocurrency
 *
 * @param {string} ticker - Stock/Crypto ticker
 * @param {string} [instrument="stock"] - Instrument type (stock[default] or crypto)
 * @param {Object} [params={}] - Fetch API options
 * @param {boolean} [corsBypass=false] - Attempt to bypass CORS (allOrigins)
 * @returns {Promise<Object>} - A promise that resolves to the quote data
 */
async function quote(
  ticker,
  instrument = "stock",
  params = {},
  corsBypass = false
) {
  let response;
  if (corsBypass) {
    response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${endpoints.fv}quote.ashx?instrument=${instrument}&ticker=${ticker}&timeframe=d&type=new`
      )}`,
      params
    );
  } else {
    response = await fetch(
      `${endpoints.fv}quote.ashx?instrument=${instrument}&ticker=${ticker}&timeframe=d&type=new`,
      params
    );
  }
  let data = await response.json();
  return data;
}

module.exports = {
  statement,
  quote,
};
