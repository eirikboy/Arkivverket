const express = require("express");
const app = express();
const cors = require("cors");
const got = require("got");

const port = process.env.PORT || 3900;

const digitalarkivetApi = got.extend({
  prefixUrl: "https://media.digitalarkivet.no",
  headers: {
    "auth-token": "PLACEHOLDER",
  },
});

async function getData(page) {
  const urlQuery = { searchParams: { "tags[]": "373", page } };
  return digitalarkivetApi.get("api/v1/db/browse", urlQuery).json();
}

app.get("/data/:page", cors(), (req, res, next) => {
  (async () => {
    const data = await getData(req.params.page);
    res.send(data);
  })().catch(next);
});

app.listen(port, () => {
  console.log("Proxy listening on port " + port);
});
