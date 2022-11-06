/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import express from "express";

const app = express();
const port = 3000;

// Paths

app.use((req, res, next) => {
  res.send(`<h1>Server received request<h1>
  <h2>Properties</h2>
  <ul>
  <li> app: ${req.app}
  <li> baseUrl: ${req.baseUrl}
  <li> body: ${req.body}
  <li> cookies: ${req.cookies}
  <li> headers: ${JSON.stringify(
    Object.fromEntries(Object.entries(req.headers))
  )}
  <li> hostname: ${req.hostname}
  <li> ip: ${req.ip}
  <li> ips: ${req.ips}
  <li> method: ${req.method}
  <li> originalUrl: ${req.originalUrl}
  <li> params: ${JSON.stringify(req.params)}
  <li> path: ${req.path}
  <li> protocol: ${req.protocol}
  <li> query: ${JSON.stringify(req.query)}
  <li> route: ${req.route}
  <li> secure: ${req.secure}
  <li> signedCookies: ${req.signedCookies}
  <li> stale: ${req.stale}
  <li> subdomains: ${req.subdomains}
  <li> xhr: ${req.xhr}
  </ul>

  <h2>Methods</h2>
  <ul>
  <li> accepts(): ${req.accepts()}
  <li> acceptsCharsets(): ${req.acceptsCharsets()}
  <li> acceptsEncodings(): ${req.acceptsEncodings()}
  <li> acceptsLanguages(): ${req.acceptsLanguages()}
  <li> get("Content-Type"): ${req.get("Content-Type")}
  <li> header("host"): ${req.header("host")}
  <li> is("application/json"): ${req.is("application/json")}
  
  </ul>
  `);
});

// Start

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Express app listening at ${url}`);
});
