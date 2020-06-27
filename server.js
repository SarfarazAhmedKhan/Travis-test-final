const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    status: "Backend Is Working here check now brother oho!",
  });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server Running At ${PORT}`);
  console.log(`Server Test At ${PORT}`);
});
