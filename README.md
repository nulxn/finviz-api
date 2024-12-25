# finviz-api

## Functions

<dl>
<dt><a href="#statement">statement(ticker)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Get financial statement data for a stock</p>
</dd>
<dt><a href="#quote">quote(ticker, [instrument])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Get quote data for a stock or cryptocurrency</p>
</dd>
</dl>

<a name="statement"></a>

### statement(ticker) ⇒ <code>Promise.&lt;Object&gt;</code>

Get financial statement data for a stock

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the financial statement data

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ticker | <code>string</code> | Stock ticker |

<a name="quote"></a>

### quote(ticker, [instrument]) ⇒ <code>Promise.&lt;Object&gt;</code>

Get quote data for a stock or cryptocurrency

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the quote data

| Param        | Type                | Default                        | Description                                |
| ------------ | ------------------- | ------------------------------ | ------------------------------------------ |
| ticker       | <code>string</code> |                                | Stock/Crypto ticker                        |
| [instrument] | <code>string</code> | <code>&quot;stock&quot;</code> | Instrument type (stock[default] or crypto) |

## Developer Deps

- [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown)

---

© 2024 nulxn
