const finvizApi = require("../index");

finvizApi.quote("AAPL").then((data) => {
  console.log(data.ticker);
  console.log("=====");
  console.log(`Current Price: ${data.lastClose.toFixed(2)}`);
  console.log(`Change ($): $${(data.lastClose - data.prevClose).toFixed(2)}`);
  console.log(
    `Change (%): ${(
      ((data.lastClose - data.prevClose) / data.prevClose) *
      100
    ).toFixed(2)}%`
  );

  console.log("\n");
});

finvizApi.quote("ETHUSD", "crypto").then((data) => {
  console.log(data.ticker);
  console.log("=====");
  console.log(`Current Price: $${data.lastClose.toFixed(2)}`);
  console.log(`Change ($): $${(data.lastClose - data.prevClose).toFixed(2)}`);
  console.log(
    `Change (%): ${(
      ((data.lastClose - data.prevClose) / data.prevClose) *
      100
    ).toFixed(2)}%`
  );

  console.log("\n");
});
