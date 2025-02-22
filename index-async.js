require("dotenv").config();
const express = require("express");
const asyncRoutes = require("./routes/async");

const app = express();
const PORT = process.env.ASYNC_PORT || 3001;

app.use("/", asyncRoutes);
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Async server is running on port ${PORT}`);
});
