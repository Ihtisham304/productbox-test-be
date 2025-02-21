require("dotenv").config();
const express = require("express");
const promisesRoutes = require("./routes/promises");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", promisesRoutes);
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Promises server is running on port ${PORT}`);
});
