require("dotenv").config();
const express = require("express");
const callbacksRoutes = require("./routes/callbacks");

const app = express();
const PORT = process.env.CALLBACKS_PORT || 3002;

app.use("/", callbacksRoutes);
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Callbacks server is running on port ${PORT}`);
});
