// env
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const rootRouter = require("./routes/root");

const app = express();
const PORT = process.env.PORT || 3500;

// middleware
app.use(cors());
app.use(express.json());

app.use("/", rootRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

app.listen(PORT, () => `Server is listening on PORT: ${PORT}`);
