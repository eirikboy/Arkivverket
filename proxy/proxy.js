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
app.listen(port, () => {
  console.log("Proxy listening on port " + port);
});
