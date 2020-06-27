const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    status: "Successfully connected with travis ci and elasticbeacnstalk!",
  });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Successfully Test At ${PORT}`);
});
