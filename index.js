const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

require("./db/conn.js");
app.use(express.json());
app.use(bodyParser.json());

app.use("/", require("./Routes/Videos/VideoUp"));

app.listen(port, () => {
  console.log(`backend server running on ${port}`);
});
